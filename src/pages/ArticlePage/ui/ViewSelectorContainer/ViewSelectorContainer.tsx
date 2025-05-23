import { memo } from 'react';

import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

import { ArticleViewSelector } from '@/entities/Article';

interface viewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    (props: viewSelectorContainerProps) => {
        const { className } = props;

        const { view, onChangeView } = useArticlesFilters();

        return (
            <ArticleViewSelector
                view={view}
                onViewClick={onChangeView}
                className={className}
            />
        );
    },
);
