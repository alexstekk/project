import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextVariants {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: string;
}

export const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = TextVariants.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.text, {}, [className, cls[variant]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};