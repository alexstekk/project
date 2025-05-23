import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '../../entities/Article/model/consts/articleConsts';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOptions } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/ListBox';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleSortSelector.module.scss';

interface articleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSortField: (newSortField: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: articleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSortField } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t(' названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t(' просмотрам'),
            },
        ],
        [t],
    );

    // BAD PRACTICE using AS

    // const changeSortHandler = useCallback((newSort: string) => {
    //     onChangeSortField(newSort as ArticleSortField);
    // }, [onChangeSortField]);
    //
    // const changeOrderHandler = useCallback((newOrder: string) => {
    //     onChangeOrder(newOrder as SortOrder);
    // }, [onChangeOrder]);

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <div
                    className={classNames(cls.articleSortSelector, {}, [
                        className,
                    ])}
                >
                    <VStack gap={'8'}>
                        <Text text={t('Сортировать по:')} />
                        <ListBox
                            items={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSortField}
                            anchor={'bottom start'}
                        />
                        <ListBox
                            items={orderOptions}
                            value={order}
                            anchor={'bottom start'}
                            onChange={onChangeOrder}
                        />
                    </VStack>
                </div>
            }
            off={
                <div
                    className={classNames(cls.articleSortSelector, {}, [
                        className,
                    ])}
                >
                    <Select
                        label={t('Сортировать по')}
                        options={sortFieldOptions}
                        value={sort}
                        onChange={onChangeSortField}
                    />
                    <Select
                        label={t('по')}
                        options={orderOptions}
                        value={order}
                        onChange={onChangeOrder}
                    />
                </div>
            }
        />
    );
});
