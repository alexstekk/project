import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';


interface skeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string | number;
}

export const Skeleton = memo((props: skeletonProps) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };


    return (
        <div
            className={classNames(cls.skeleton, {}, [className])}
            style={styles}
        >

        </div>
    );
});