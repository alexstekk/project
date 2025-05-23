import React, { InputHTMLAttributes, memo, ReactNode, useState } from 'react';
import { Trans } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readonly,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };
    return (
        <div
            className={classNames(
                cls.inputWrapper,
                {
                    [cls.readonly]: readonly,
                    [cls.isFocused]: isFocused,
                    [cls.withAddonLeft]: Boolean(addonLeft),
                    [cls.withAddonRight]: Boolean(addonRight),
                },
                [className],
            )}
        >
            <Trans i18nKey={'placeholder'}>
                <div className={cls.addonLeft}>{addonLeft}</div>
                <input
                    autoFocus={autoFocus}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    readOnly={readonly}
                    placeholder={placeholder}
                    onFocus={onFocus}
                    {...otherProps}
                />
                <div className={cls.addonRight}>{addonRight}</div>
            </Trans>
        </div>
    );
});
