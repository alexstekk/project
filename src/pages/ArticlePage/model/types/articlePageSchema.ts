import { type EntityState } from '@reduxjs/toolkit';

import { Article, ArticleView, ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';


export interface ArticlePageSchema extends EntityState<Article, string> {
    isLoading?: boolean,
    error?: string;
    view: ArticleView;

    //pagination
    page: number;
    limit: number;
    hasMore: boolean;

    //filters
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;


    _inited: boolean;
}