import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';


import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import {
    ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button';
import { Text, TextVariants } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const authData = useAppSelector(getUserAuthData);

    if (authData) {
        return (
            <header
                                    className={classNames(cls.navbarRedesigned, {}, [
                                        className,
                                    ])}
                                >
                                    <HStack
                                        gap={'16'}
                                        className={cls.actions}
                                        align={'center'}
                                    >
                                        <NotificationButton />
                                        <AvatarDropdown />
                                    </HStack>
                                </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <ButtonDeprecated
                    variant={ButtonVariants.CLEAR_INVERTED}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </ButtonDeprecated>
            </div>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
