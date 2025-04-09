import { useCallback, useEffect, useRef } from 'react';

// eslint-disable-next-line
export function useDebounce(callback: (...args: any[]) => void, delay: number) {

    // eslint-disable-next-line
    const timeoutRef = useRef<any>(null);

    // eslint-disable-next-line
    const debouncedCallback = useCallback((...args: any[]) => {

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);

    }, [callback, delay]);

    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    return debouncedCallback;
}


