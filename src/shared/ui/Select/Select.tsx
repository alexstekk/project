import { ChangeEvent, useMemo } from 'react';
import { Trans } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
    value: T;
    content: string;
}


interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOptions<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props;

    const optionList = useMemo(() => {
        return options?.map(opt => (
            <option
                key={opt.value}
                className={cls.option}
                value={opt.value}
            >
                {opt.content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };


    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <Trans i18nKey={label}>
                {label && (
                    <span
                        className={cls.label}
                    >
                {label}
                </span>
                )}
                <select
                    className={cls.select}
                    value={value}
                    onChange={onChangeHandler}
                    disabled={readonly}
                >
                    {optionList}
                </select>
            </Trans>
        </div>
    );
};