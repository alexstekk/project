import { CSSProperties, useMemo } from 'react';

import { AppImage } from '../../redesigned/AppImage';
import { Skeleton } from '../Skeleton';

import UserIcon from '@/shared/assets/icons/solar--user-outline.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt } = props;

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        };
    }, [size]);

    const fallback = <Skeleton width={size} height={size} border={'50%'} />;
    const errorFallback = <UserIcon width={size} height={size} />;

    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, {}, [className])}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
};
