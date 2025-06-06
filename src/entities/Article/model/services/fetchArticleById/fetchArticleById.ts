import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from '../../types/Article';

import { ThunkConfig } from '@/app/providers/StoreProvider';



export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId = '1', thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<Article>(
            '/articles/' + articleId,
            {
                params: {
                    _expand: 'user',
                },
            },
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
