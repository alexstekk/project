import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

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
                gap={'16'}
                className={classNames('', {}, [className])}
                data-testid={'ArticleRecommendationsList'}
            >
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Text title={t('Рекомендуем')} bold size={'sizeL'} />}
                    off={
                        <TextDeprecated
                            title={t('Рекомендуем')}
                            align={TextAlign.CENTER}
                        />
                    }
                />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    target={'_blank'}
                />
            </VStack>
        );
    },
);
