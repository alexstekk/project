import { FunctionComponent } from 'react';

import { setFeatureFlag } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';

export const FeaturesFlagsDecorator =
    (features: FeatureFlags) => (Story: FunctionComponent) => {
        setFeatureFlag(features);
        return <Story />;
    };
