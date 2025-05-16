import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface articleRatingProps {
    className?: string;
    articleId?: string;
}

const ArticleRating = memo((props: articleRatingProps) => {
    const {
        className,
        articleId = '1',
    } = props;

    const { t } = useTranslation();

    const userData = useAppSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? ''
    });

    const [rateArticleMutation] = useRateArticle({});

    const rating = data?.[0];

    const onRateArticle = useCallback((starsCount: number, feedback?: string) => {
        rateArticleMutation({
            userId: userData?.id ?? '',
            articleId,
            rate: starsCount,
            feedback,
        });
    }, [articleId, rateArticleMutation, userData?.id]);

    const onCancel = useCallback((starsCount: number) => {
        onRateArticle(starsCount);
    }, [onRateArticle]);
    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        onRateArticle(starsCount, feedback);
    }, [onRateArticle]);

    if (isLoading) {
        return <Skeleton width={'100%'} height={120}/>;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            feedBackTitle={t('Оставьте отзыв о статье')}
            title={t('Оцените статью')}
            hasFeedback
        />

    );
});

export default ArticleRating;