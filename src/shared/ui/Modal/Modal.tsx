import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import React, { ReactNode, useCallback, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose
    } = props;

    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const contentClickHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

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


    return (
        //  <Portal>
        <div
            className={classNames(cls.modal, { [cls.opened]: isOpen }, [theme, className])}
        >
            <div
                className={cls.overlay}
                onClick={closeHandler}
            >
                <div
                    className={cls.content}
                    onClick={contentClickHandler}
                >
                    {children}
                </div>
            </div>
        </div>
        //</Portal>
    );
};