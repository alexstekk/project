import { memo } from 'react';

import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';

interface filtersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: filtersContainerProps) => {
    const { className } = props;

    const {
        type,
        onChangeType,
        onChangeSearch,
        search,
        onChangeOrder,
        onChangeSortField,
        sort,
        order,
    } = useArticlesFilters();
    return (
        <ArticlesFilters
            className={classNames('', {}, [className])}
            type={type}
            onChangeOrder={onChangeOrder}
            onChangeSortField={onChangeSortField}
            sort={sort}
            order={order}
            onChangeType={onChangeType}
            onChangeSearch={onChangeSearch}
            search={search}
        />
    );
});
