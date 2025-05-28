import { FunctionComponent } from 'react';

import { setFeatureFlag } from '@/shared/lib/features';
import { getAllFeatureFlag } from '@/shared/lib/features/lib/setGetFeatures';
import { FeatureFlags } from '@/shared/types/featureFlags';

export const NewDesignDecorator = (Story: FunctionComponent) => {
    setFeatureFlag({ ...getAllFeatureFlag(), isAppRedesigned: true });
    return (
        <div className={'appRedesigned'}>
            <Story />
        </div>
    );
};
