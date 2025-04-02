import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';
import { memo, useCallback } from 'react';


interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const countryOptions = Object.entries(Country).map(([value, content]) => (
    { value: content, content }));

console.log(countryOptions);

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


    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={countryOptions}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
        />


    );
});