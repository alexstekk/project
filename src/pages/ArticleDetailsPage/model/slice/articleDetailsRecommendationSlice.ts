import { createEntityAdapter, createSlice, } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { Article } from 'entities/Article';
import {
    ArticleDetailsRecommendationsSchema
} from '../types/ArticleDetailsRecommendationsSchema';
import {
    fetchArticleRecommendations
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations';


const recommendationsAdapter = createEntityAdapter<Article>({});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => (state.articleDetailsPage?.recommendations as ArticleDetailsRecommendationsSchema || recommendationsAdapter.getInitialState())
);

const articleDetailsRecommendationSlice = createSlice({
    name: 'articleDetailsRecommendationSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        entities: {},
        ids: [],
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsRecommendationReducer } = articleDetailsRecommendationSlice;