import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';


import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { articlePageActions } from '../../model/slice/articlePageSlice';

import {
    ArticleSortField,
    ArticleSortSelector,
    ArticleType,
    ArticleTypeTabs,
    ArticleView,
    ArticleViewSelector,
} from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    useAppDispatch,
    useAppSelector,
} from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticlesPageFilters.module.scss';

interface articlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: articlesPageFiltersProps) => {
    const { className } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useAppSelector(getArticlesPageView);
    const sort = useAppSelector(getArticlesPageSort);
    const order = useAppSelector(getArticlesPageOrder);
    const search = useAppSelector(getArticlesPageSearch);
    const type = useAppSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setPage(1));
            dispatch(articlePageActions.setView(view));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSortField = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlePageActions.setPage(1));
            dispatch(articlePageActions.setSort(newSort));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlePageActions.setPage(1));
            dispatch(articlePageActions.setOrder(order));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageActions.setPage(1));
            dispatch(articlePageActions.setSearch(search));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlePageActions.setType(value));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return (
        <VStack
            max
            className={classNames(cls.aticlesPageFilters, {}, [className])}
        >
            <HStack max className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSortField={onChangeSortField}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </HStack>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                    type={'search'}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </VStack>
    );
});
