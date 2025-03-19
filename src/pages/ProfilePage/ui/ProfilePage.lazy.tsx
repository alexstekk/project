import { lazy, LazyExoticComponent, ReactNode } from 'react';


export const ProfilePageLazy: LazyExoticComponent<() => ReactNode> = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            // @ts-expect-error checked
            resolve(import('./ProfilePage'));
        }, 1500);
    });
});
