import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

import {
    ArticleSortSelector,
    ArticleTypeTabs,
    ArticleViewSelector,
} from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticlesPageFilters.module.scss';

interface articlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: articlesPageFiltersProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const {
        type,
        onChangeType,
        onChangeSearch,
        search,
        onChangeView,
        view,
        onChangeOrder,
        onChangeSortField,
        sort,
        order,
    } = useArticlesFilters();

    return (
        <VStack
            max
            className={classNames(cls.aticlesPageFilters, {}, [className])}
        >
            <HStack max className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSortField={onChangeSortField}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </HStack>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                    type={'search'}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </VStack>
    );
});
