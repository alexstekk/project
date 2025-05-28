import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';
import { FeatureFlags } from '@/shared/types/featureFlags';

const defaultFeatures = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

let featuresFlags: FeatureFlags = {
    ...defaultFeatures,
};

export function setFeatureFlag(newFeaturesFlags?: FeatureFlags) {
    if (newFeaturesFlags) {
        featuresFlags = newFeaturesFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featuresFlags[flag];
}

export function getAllFeatureFlag() {
    return featuresFlags;
}
