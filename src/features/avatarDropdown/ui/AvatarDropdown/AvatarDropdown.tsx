import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    useAppDispatch,
    useAppSelector,
} from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Dropdown';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Dropdown';

interface avatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: avatarDropdownProps) => {
    const { className } = props;
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

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Админка'),
                      href: getRouteAdmin(),
                  },
              ]
            : []),
        {
            content: t('Профиль'),
            href: getRouteProfile(authData?.id),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ];
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Dropdown
                    trigger={<Avatar size={40} src={authData?.avatar} />}
                    items={items}
                />
            }
            off={
                <DropdownDeprecated
                    trigger={
                        <AvatarDeprecated size={30} src={authData?.avatar} />
                    }
                    items={items}
                />
            }
        />
    );
});
