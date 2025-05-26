import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/Article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleList.module.scss';

interface articleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton view={view} key={index} />
        ));

export const ArticleList = memo((props: articleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props;

    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.articlePage, {}, [className])}>
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <HStack
                    gap={'16'}
                    wrap={'wrap'}
                    data-testid={'ArticleList'}
                    className={classNames(cls.articleListRedesigned, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    {isLoading && getSkeletons(view)}
                    {articles.length > 0 ? articles.map(renderArticle) : null}
                </HStack>
            }
            off={
                <div
                    data-testid={'ArticleList'}
                    className={classNames(cls.articleList, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    {isLoading && getSkeletons(view)}
                    {articles.length > 0 ? articles.map(renderArticle) : null}
                </div>
            }
        />
    );
});
