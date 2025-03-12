import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonVariants } from 'shared/ui/Button/ui/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    variant={ButtonVariants.CLEAR_INVERTED}
                    onClick={onToggleModal}
                >
                    {t('Войти')}

                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid animi eligendi fuga fugit impedit,
                inventore laboriosam magni perferendis quis? Accusamus aliquid architecto dolor ducimus fugit neque
                omnis
                optio quo?
            </Modal>
        </div>
    );
};

