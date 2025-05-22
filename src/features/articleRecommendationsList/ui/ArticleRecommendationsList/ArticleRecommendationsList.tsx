import { memo } from 'react';
import { useTranslation } from 'react-i18next';


import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const { isLoading, data: articles = [] } =
            useArticleRecommendationsList(3);

        return (
            <VStack
                gap={'8'}
                className={classNames('', {}, [className])}
                data-testid={'ArticleRecommendationsList'}
            >
                <Text title={t('Рекомендуем')} align={TextAlign.CENTER} />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    target={'_blank'}
                />
            </VStack>
        );
    },
);
