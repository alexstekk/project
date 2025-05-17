import { useCallback, useEffect, useRef } from 'react';

/**
 * Хук, который позволяет отменять предыдущий вызов функции, пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */
// eslint-disable-next-line
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    // eslint-disable-next-line
    const timeoutRef = useRef<any>(null);

    const debouncedCallback = useCallback(
        (...args: any[]) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );

    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    return debouncedCallback;
}
