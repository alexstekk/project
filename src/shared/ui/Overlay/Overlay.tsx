import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';


interface overlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = memo((props: overlayProps) => {
    const {
        className,
        onClick,
    } = props;

    return (
        <div
            className={classNames(cls.overlay, {}, [className])}
            onClick={onClick}
        />
    );
});