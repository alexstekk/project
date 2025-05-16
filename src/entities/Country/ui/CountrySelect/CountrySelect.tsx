import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../../model/types/country';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/ListBox';


interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const countryOptions = Object.entries(Country).map(([value, content]) => (
    { value: content, content }));

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        onChange,
        value,
        readonly,
    } = props;


    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Укажите страну')}
    //         options={countryOptions}
    //         onChange={onChangeHandler}
    //         value={value}
    //         readonly={readonly}
    //     />
    // );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            items={countryOptions}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            label={t('Укажите страну')}
        />
    );
});