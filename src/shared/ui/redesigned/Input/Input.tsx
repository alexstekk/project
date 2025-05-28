import React, { InputHTMLAttributes, memo, ReactNode, useState } from 'react';
import { Trans } from 'react-i18next';

import { HStack } from '../Stack';
import { Text } from '../Text';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    label?: string;
    size?: InputSize;
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
        label,
        size = 'm',
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const input = (
        <div
            className={classNames(
                cls.inputWrapper,
                {
                    [cls.readonly]: readonly,
                    [cls.isFocused]: isFocused,
                    [cls.withAddonLeft]: Boolean(addonLeft),
                    [cls.withAddonRight]: Boolean(addonRight),
                },
                [className, cls[size]],
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
                    onBlur={() => setIsFocused(false)}
                    {...otherProps}
                />
                <div className={cls.addonRight}>{addonRight}</div>
            </Trans>
        </div>
    );

    if (label) {
        return (
            <HStack max gap={'8'} align={'center'}>
                <Text text={label} className={cls.label} />
                {input}
            </HStack>
        );
    }

    return input;
});
