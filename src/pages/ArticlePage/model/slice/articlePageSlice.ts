import { createEntityAdapter, createSlice, PayloadAction, } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleType, ArticleView } from 'entities/Article';
import { ArticlePageSchema } from '../types/articlePageSchema';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';


const articlePageAdapter = createEntityAdapter<Article>({});

export const getArticleList = articlePageAdapter.getSelectors<StateSchema>(
    (state) => (state?.articlePage as ArticlePageSchema || articlePageAdapter.getInitialState())
);

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlePageAdapter.getInitialState<ArticlePageSchema>({
        _inited: false,
        isLoading: false,
        error: undefined,
        entities: {},
        ids: [],
        view: ArticleView.SMALL,
        hasMore: true,
        page: 1,
        limit: 9,
        sort: ArticleSortField.CREATED,
        order: 'asc',
        search: '',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;

        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;

                if (action?.meta?.arg?.replace) {
                    articlePageAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length > state.limit;

                if (state.page === 1) {
                    articlePageAdapter.setAll(state, action.payload);
                } else {
                    articlePageAdapter.addMany(state, action.payload);
                }

            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlePageReducer } = articlePageSlice;
export const { actions: articlePageActions } = articlePageSlice;