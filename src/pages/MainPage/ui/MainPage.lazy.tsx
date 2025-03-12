import { lazy, LazyExoticComponent, ReactNode } from 'react';


export const MainPageLazy: LazyExoticComponent<() => ReactNode> = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(import('./MainPage'));
        }, 1500);
    });
});