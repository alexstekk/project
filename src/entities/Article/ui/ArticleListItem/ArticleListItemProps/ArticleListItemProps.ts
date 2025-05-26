import { HTMLAttributeAnchorTarget } from 'react';

import { ArticleView } from '../../../model/consts/articleConsts';
import { Article } from '../../../model/types/Article';

export interface articleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}
