import { lazy, LazyExoticComponent, ReactNode } from 'react';


export const ArticlesPageLazy: LazyExoticComponent<() => ReactNode> = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            // @ts-expect-error types
            resolve(import('./ArticlesPage'));
        }, 400);
    });
});