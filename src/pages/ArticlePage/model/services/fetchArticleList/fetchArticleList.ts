import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    getArticlesPageLimit,
    getArticlesPageNumber,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

export interface fetchArticleListProps {
    replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<
    Article[],
    fetchArticleListProps,
    ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const limit = getArticlesPageLimit(getState());
    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());
    const page = getArticlesPageNumber(getState());
    const type = getArticlesPageType(getState());

    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        });

        const response = await extra.api.get<Article[]>('/articles/', {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
                _order: order,
                _sort: sort,
                q: search,
                // @ts-ignore
                // eslint-disable-next-line no-constant-condition
                type: type === 'ALL' || 'Все статьи' ? undefined : type,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
