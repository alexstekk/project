import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlePage/model/selectors/articlesPageSelectors';

export interface fetchArticleListProps {
    page?: number;
}


export const fetchArticleList = createAsyncThunk<
    Article[],
    fetchArticleListProps,
    ThunkConfig<string>
>(
    'articleDetails/fetchCommentsByArticleId',
    async (args, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;


        const { page = 1 } = args;
        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles/', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                }
            });


            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }

    }
);