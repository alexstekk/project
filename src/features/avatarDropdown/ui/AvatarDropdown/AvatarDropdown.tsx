import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Dropdown';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { AppRoutes, RoutePath } from '@/shared/const/router';


interface avatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: avatarDropdownProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const authData = useAppSelector(getUserAuthData);
    const isAdmin = useAppSelector(isUserAdmin);
    const isManager = useAppSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            trigger={<Avatar size={30} src={authData?.avatar}/>}
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Админка'),
                    href: RoutePath[AppRoutes.ADMIN_PANEL],
                }] : []),
                {
                    content: t('Профиль'),
                    href: RoutePath[AppRoutes.PROFILE] + authData?.id,
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
        />
    );
});