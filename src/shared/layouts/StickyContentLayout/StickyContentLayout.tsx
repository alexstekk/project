import { memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './StickyContentLayout.module.scss';

interface stickyContentLayoutProps {
    className?: string;
    left?: ReactNode;
    content: ReactNode;
    right?: ReactNode;
}

export const StickyContentLayout = memo((props: stickyContentLayoutProps) => {
    const { className, content, right, left } = props;

    return (
        <div className={classNames(cls.mainLayout, {}, [className])}>
            {right && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {left && <div className={cls.right}>{right}</div>}
        </div>
    );
});
