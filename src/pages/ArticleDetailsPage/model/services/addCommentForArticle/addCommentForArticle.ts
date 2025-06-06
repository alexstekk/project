import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesDetailsData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { addCommentFormActions } from '@/features/addCommentForm';


export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetails/sendComment', async (text, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticlesDetailsData(getState());

    if (!userData || !text || !article) {
        return rejectWithValue('error');
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article?.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(addCommentFormActions.setText(''));
        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
