import { createAsyncThunk } from '@reduxjs/toolkit';

import { setJsonSettingsMutations } from '../../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import type { JsonSettings } from '../types/jsonSettings';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
        return rejectWithValue('error');
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutations({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            throw new Error();
        }

        return response.jsonSettings;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
