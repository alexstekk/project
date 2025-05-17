import { Suspense, lazy } from 'react';

import { articleRatingProps } from './ArticleRating';

import { Skeleton } from '@/shared/ui/Skeleton';


const ArticleRatingAsync = lazy(() => import('./ArticleRating'));

export const ArticleRatingLazy = (props: articleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={'10%'} height={100} />}>
            <ArticleRatingAsync {...props} />
        </Suspense>
    );
};
