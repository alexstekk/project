import { ReactNode, UIEvent, memo, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import {
    useAppDispatch,
    useAppSelector,
} from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import {
    getScrollSavePositionByPath,
    scrollSaveSliceActions,
} from '@/shared/lib/ssscrollSave';
import { TestProps } from '@/shared/types/tests';

import cls from './Page.module.scss';

interface pageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Page = memo((props: pageProps) => {
    const { className, children, onScrollEnd } = props;

    const wrapperRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useAppSelector((state: StateSchema) =>
        getScrollSavePositionByPath(state, pathname),
    );

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollSaveSliceActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop,
            }),
        );
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
            data-testid={props['data-testid'] ?? 'Page'}
            ref={wrapperRef}
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.pageRedesigned,
                    off: () => cls.page,
                }),
                {},
                [className],
            )}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? (
                <div ref={triggerRef} className={cls.trigger}></div>
            ) : null}
        </section>
    );
});
