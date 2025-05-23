import { useCallback } from 'react';

import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { articlePageActions } from '../../model/slice/articlePageSlice';

import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import {
    useAppDispatch,
    useAppSelector,
} from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/sort';

export function useArticlesFilters() {
    const view = useAppSelector(getArticlesPageView);
    const sort = useAppSelector(getArticlesPageSort);
    const order = useAppSelector(getArticlesPageOrder);
    const search = useAppSelector(getArticlesPageSearch);
    const type = useAppSelector(getArticlesPageType);

    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSortField = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(newSort));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlePageActions.setOrder(order));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageActions.setSearch(search));
            dispatch(articlePageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlePageActions.setType(value));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return {
        view,
        sort,
        order,
        search,
        type,
        onChangeView,
        onChangeSortField,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
    };
}
