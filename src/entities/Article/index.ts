export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/Article';

export type { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema';

export { getArticlesDetailsData } from './model/selectors/getArticlesDetails';

export { ArticleViewSelector } from '@/features/ArticleViewSelector/ArticleViewSelector';

export { ArticleSortSelector } from '@/features/ArticleSortSelector/ArticleSortSelector';

export { ArticleTypeTabs } from '@/features/ArticleTypeTabs/ArticleTypeTabs';

export {
    ArticleView,
    ArticleType,
    ArticleSortField,
    ArticleBlockType,
} from './model/consts/articleConsts';

export { ArticleList } from './ui/ArticleList/ArticleList';

export { articleDetailsReducer } from './model/slice/articleDetailsSlice';
