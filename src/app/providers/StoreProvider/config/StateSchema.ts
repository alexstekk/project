import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ScrollSaveSchema } from 'src/shared/lib/ScrollSave';

import { ArticleDetailsSchema } from '@/entities/Article';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { ProfileSchema } from '@/features/editableProfileCard';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlePageSchema } from '@/pages/ArticlePage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
    user: UserSchema,
    scrollSave: ScrollSaveSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

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
