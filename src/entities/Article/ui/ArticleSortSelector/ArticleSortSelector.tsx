import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { useTranslation } from 'react-i18next';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/Article';
import { SortOrder } from 'shared/types';


interface articleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSortField: (newSortField: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: articleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSortField,
    } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => ([
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        },
    ]), [t]);

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => ([
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t(' названию')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t(' просмотрам')
        },

    ]), [t]);

    // BAD PRACTICE using AS

    // const changeSortHandler = useCallback((newSort: string) => {
    //     onChangeSortField(newSort as ArticleSortField);
    // }, [onChangeSortField]);
    //
    // const changeOrderHandler = useCallback((newOrder: string) => {
    //     onChangeOrder(newOrder as SortOrder);
    // }, [onChangeOrder]);

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
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
    );
});