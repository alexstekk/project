import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, { InputHTMLAttributes, memo } from 'react';
import { Trans } from 'react-i18next';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {placeholder && <div className={cls.placeholder}>
                {placeholder}
            </div>}
            <Trans i18nKey='placeholder'>
                <input
                    autoFocus={autoFocus}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    {...otherProps}
                />
            </Trans>
        </div>
    );
});