import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
    ArticleSortField,
    ArticleSortSelector,
    ArticleType,
    ArticleTypeTabs,
} from '@/entities/Article';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticlesFilters.module.scss';

interface articlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSortField: (newSortField: ArticleSortField) => void;
    type: ArticleType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: articlesFiltersProps) => {
    const {
        className,
        onChangeSearch,
        onChangeType,
        search,
        onChangeSortField,
        sort,
        order,
        onChangeOrder,
        type,
    } = props;

    const { t } = useTranslation();

    return (
        <Card
            className={classNames(cls.articlesFilters, {}, [className])}
            padding={'24'}
        >
            <VStack gap={'32'}>
                <Input
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                    type={'search'}
                    addonLeft={<SearchIcon width={32} height={32} />}
                    size={'s'}
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    className={cls.tabs}
                />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSortField={onChangeSortField}
                />
            </VStack>
        </Card>
    );
});
