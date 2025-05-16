import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { AppRoutes, RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { AppLink } from '@/shared/ui/AppLink';
import { ButtonVariants , Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextVariants } from '@/shared/ui/Text';

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
        return (<header className={classNames(cls.navbar, {}, [className])}>
                <Text title={'AlexStekk prod'} variant={TextVariants.INVERTED}/>
                <div className={cls.links}>
                    <AppLink
                        to={RoutePath[AppRoutes.ARTICLE_CREATE]}
                        variant={'inverted'}
                    >
                        {
                            t('Создать статью')
                        }
                    </AppLink>
                    <HStack
                        gap={'16'}
                        className={cls.actions}
                        align={'center'}
                    >
                        <NotificationButton/>
                        <AvatarDropdown/>
                    </HStack>

                    {/*<Button*/}
                    {/*    variant={ButtonVariants.CLEAR_INVERTED}*/}
                    {/*    onClick={onLogout}*/}
                    {/*>*/}
                    {/*    {t('Выйти')}*/}

                    {/*</Button>*/}

                </div>
            </header>

        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
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
        </header>
    );

});

