import { createAsyncThunk } from '@reduxjs/toolkit';

import { updateFeaturesFlagsMutations } from '../api/featureFlagsApi';
import { getAllFeatureFlag } from '../lib/setGetFeatures';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface UpdateFeatureFlagOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeaturesFlags = createAsyncThunk<
    void,
    UpdateFeatureFlagOptions,
    ThunkConfig<string>
>('user/updateFeaturesFlags', async ({ userId, newFeatures }, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
        await dispatch(
            updateFeaturesFlagsMutations({
                userId,
                features: {
                    ...getAllFeatureFlag(),
                    ...newFeatures,
                },
            }),
        );

        location.reload();
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
