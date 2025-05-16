import { memo, ReactNode, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { getScrollSavePositionByPath, scrollSaveSliceActions } from '@/shared/lib/scrollSave';

import cls from './Page.module.scss';


interface pageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: pageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;

    const wrapperRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useAppSelector((state: StateSchema) => getScrollSavePositionByPath(state, pathname));

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveSliceActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop,
        }));
    }, 500);

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTop = scrollPosition;
        }
    });


    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {
                onScrollEnd ? <div ref={triggerRef} className={cls.trigger}></div> : null
            }
        </section>
    );
});