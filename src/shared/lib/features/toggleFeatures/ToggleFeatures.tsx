import { ReactElement } from 'react';

import { getFeatureFlag } from '../setGetFeatures';

import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { off, feature, on } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};
