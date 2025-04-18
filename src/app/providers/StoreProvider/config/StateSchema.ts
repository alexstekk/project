import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlePageSchema } from 'pages/ArticlePage';
import { ScrollSaveSchema } from 'features/ScrollSave';
import { ArticleDetailsPageSchema, ArticleDetailsRecommendationsSchema } from 'pages/ArticleDetailsPage';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    scrollSave: ScrollSaveSchema,

    // Асинхронные редюсеры
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    // articleDetailsComments?: ArticleDetailsSchema,
    // articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema,
    addCommentForm?: AddCommentFormSchema,
    articlePage?: ArticlePageSchema,
    articleDetailsPage?: ArticleDetailsPageSchema,
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema,
}
