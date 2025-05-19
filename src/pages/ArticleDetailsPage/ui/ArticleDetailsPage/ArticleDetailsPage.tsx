import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';
import { Page } from '@/shared/ui/Page';

import cls from './ArticleDetailsPage.module.scss';

interface articleDetailsPageProps {
    className?: string;
}

const reducer: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: articleDetailsPageProps) => {
    const { className } = props;

    const { t } = useTranslation('article-details');

    const { id } = useParams<{ id: string }>();

    // const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');

    if (!id && __PROJECT__ !== 'storybook')
        return (
            <div
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                {t('Статья не найдена')}
            </div>
        );

    // const articleRatingCard = toggleFeatures({
    //     name: 'isArticleRatingEnabled',
    //     on: () => <ArticleRating />,
    //     off: () => <Card>{t('Оценка скоро появится')}</Card>,
    // });

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
            <Page
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id || '1'} />
                <ToggleFeatures
                    feature={'isArticleRatingEnabled'}
                    on={<ArticleRating />}
                    off={<Card>{t('Оценка скоро появится')}</Card>}
                />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id || '1'} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
