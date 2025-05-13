import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { isLoading, data: articles = [] } = useArticleRecommendationsList(3);

    return (
        <VStack gap={'8'} className={classNames('', {}, [className])}>
            <Text
                title={t('Рекомендуем')}
                align={TextAlign.CENTER}
            />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target={'_blank'}
            />
        </VStack>
    );
});