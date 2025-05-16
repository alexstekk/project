import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay?: number;
}

/**
 *Переиспользуемый хук для модальных компонентов
 * @param isOpen - флаг показывается или нет модалка
 * @param onClose - коллбек на закрытие
 * @param animationDelay - задержка в мс
 */
export function useModal({ isOpen, onClose, animationDelay }: UseModalProps) {

    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);


    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        isMounted,
        closeHandler,
        isClosing,
    };

}