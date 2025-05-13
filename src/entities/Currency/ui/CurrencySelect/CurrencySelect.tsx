import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/ListBox/ListBox';


interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const currencyOptions = Object.entries(Currency).map(([value, content]) => ({ value, content }));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        onChange,
        value,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Укажите валюту')}
    //         options={currencyOptions}
    //         onChange={onChangeHandler}
    //         value={value}
    //         readonly={readonly}
    //     />
    // );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            value={value}
            defaultValue={'Укажите валюту'}
            items={currencyOptions}
            onChange={onChangeHandler}
            readonly={readonly}
            label={t('Укажите валюту')}
        />
    );
});