import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes} from "react";

export enum ButtonVariants {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariants;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        variant,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.button, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};