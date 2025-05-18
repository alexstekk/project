import { FeatureFlags } from '@/shared/types/featureFlags';

let featuresFlags: FeatureFlags;

export function setFeatureFlag(newFeaturesFlags?: FeatureFlags) {
    if (newFeaturesFlags) {
        featuresFlags = newFeaturesFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featuresFlags[flag];
}
