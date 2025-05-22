import { Interpolation, a } from '@react-spring/web';
import type { WithAnimated } from '@react-spring/web/dist/react-spring_web.modern';
import { CSSProperties, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

type StyleAttr = Omit<CSSProperties, 'opacity'>;

interface StyleAttrForSpringLib extends StyleAttr {
    opacity?: Interpolation<number, 0 | 1>;
}

interface overlayProps {
    className?: string;
    onClick?: () => void;
    as?: ReturnType<WithAnimated>;
    style?: StyleAttrForSpringLib;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Overlay = memo((props: overlayProps) => {
    const { className, onClick, style } = props;

    return (
        <a.div
            style={style}
            // @ts-ignore
            className={classNames(cls.overlay, {}, [className])}
            onClick={onClick}
        />
    );
});
