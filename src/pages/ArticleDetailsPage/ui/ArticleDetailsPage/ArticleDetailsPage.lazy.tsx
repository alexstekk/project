import { lazy, LazyExoticComponent, ReactNode } from 'react';


export const ArticleDetailsPageLazy: LazyExoticComponent<() => ReactNode> = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            // @ts-expect-error types
            resolve(import('./ArticleDetailsPage'));
        }, 1500);
    });
});