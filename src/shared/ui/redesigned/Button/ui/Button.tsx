import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export type ButtonVariants = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'sizeM' | 'sizeL' | 'sizeXL';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    className?: string;
    /**
     * Флаг для "выключения" кнопки
     */
    disabled?: boolean;
    /**
     * Ширина кнопки 100%
     */
    fullWidth?: boolean;
    /**
     * Размер кнопки
     */
    size?: ButtonSize;
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean;
    /**
     * Вариант кнопки: с рамкой, прозрачный и т.п.
     */
    variant?: ButtonVariants;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        variant = 'outline',
        children,
        square,
        size = 'sizeM',
        disabled,
        fullWidth,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.button, mods, [
                className,
                cls[variant],
                cls[size],
            ])}
            {...otherProps}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    );
});
