import {lazy, LazyExoticComponent, ReactNode} from "react";


export const AboutPageLazy: LazyExoticComponent<() => ReactNode> = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(import('./AboutPage'));
        }, 1500);
    });
});
