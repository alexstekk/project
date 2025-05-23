import { ButtonHTMLAttributes, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export type ButtonVariants = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'sizeM' | 'sizeL' | 'sizeXL';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Вариант кнопки: с рамкой, прозрачный и т.п.
     */
    variant?: ButtonVariants;
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean;
    /**
     * Размер кнопки
     */
    size?: ButtonSize;
    /**
     * Флаг для "выключения" кнопки
     */
    disabled?: boolean;
    /**
     * Ширина кнопки 100%
     */
    fullWidth?: boolean;
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
        ...otherProps
    } = props;

    const mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
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
            {children}
        </button>
    );
});
