import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonVariants } from 'shared/ui/Button/ui/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux/reduxTypedHooks';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useAppSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (<div className={classNames(cls.navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button
                        variant={ButtonVariants.CLEAR_INVERTED}
                        onClick={onLogout}
                    >
                        {t('Выйти')}

                    </Button>
                </div>
            </div>

        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    variant={ButtonVariants.CLEAR_INVERTED}
                    onClick={onShowModal}
                >
                    {t('Войти')}

                </Button>
            </div>
            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
        </div>
    );

});

