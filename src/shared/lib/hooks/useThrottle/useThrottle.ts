import { useCallback, useEffect, useRef } from 'react';

// eslint-disable-next-line
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);

    // eslint-disable-next-line
    const timeoutRef = useRef<any>(null);

     
    const throttledCallback = useCallback(
        (...args: any[]) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;

                timeoutRef.current = setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );

    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    return throttledCallback;
}
