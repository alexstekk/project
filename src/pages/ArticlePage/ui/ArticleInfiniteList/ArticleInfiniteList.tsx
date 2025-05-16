import { memo } from 'react';
import { useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { getArticleList } from '../../model/slice/articlePageSlice';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { ArticleList } from '@/entities/Article';


interface articleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: articleInfiniteListProps) => {
    const {
        className,
    } = props;

    const articles = useAppSelector(getArticleList.selectAll);
    const isLoading = useAppSelector(getArticlesPageIsLoading);
    const view = useAppSelector(getArticlesPageView);

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});