import { Article, ArticleView } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';

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