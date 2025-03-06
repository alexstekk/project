import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';
import {ButtonHTMLAttributes} from "react";

export enum ButtonVariants {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariants;
    square?: boolean;
    size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        variant,
        children,
        square,
        size,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            className={classNames(cls.button, mods, [className, cls[variant], [cls[size]]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};