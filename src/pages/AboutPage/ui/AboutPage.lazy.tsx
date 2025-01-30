import {lazy, LazyExoticComponent, ReactNode} from "react";


export const AboutPageLazy: LazyExoticComponent<() => ReactNode> = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            // @ts-ignore
            resolve(import('./AboutPage'))
        }, 1500)
    })
});
