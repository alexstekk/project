import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import React, { ReactNode } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import { useModal } from '@/shared/lib/useModal/useModal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const animationDelay = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const { theme } = useTheme();

    const { isMounted, closeHandler, isClosing } = useModal({
        animationDelay,
        isOpen,
        onClose,
    });

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.modal, {
                    [cls.opened]: isOpen,
                    [cls.isClosing]: isClosing
                }, [theme, className])}
            >
                <Overlay onClick={closeHandler}/>
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};