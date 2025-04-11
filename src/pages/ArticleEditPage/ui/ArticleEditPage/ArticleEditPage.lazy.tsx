import { lazy, LazyExoticComponent, ReactNode } from 'react';


export const ArticleEditPageLazy: LazyExoticComponent<() => ReactNode> = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            // @ts-expect-error types
            resolve(import('./ArticleEditPage'));
        }, 1500);
    });
});