import { RefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: RefObject<HTMLElement | null>;
    wrapperRef: RefObject<HTMLElement | null>;
}

export function useInfiniteScroll({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) {

    useEffect(() => {

        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        let observer: IntersectionObserver | null = null;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }

            }, options);
            if (triggerElement) {
                observer.observe(triggerElement);
            }
        }

        return () => {
            // debugger;
            if (observer && triggerElement) {

                observer.unobserve(triggerElement);
            }
        };


    }, [callback, triggerRef, wrapperRef]);
}