import { FunctionComponent, SVGProps } from 'react';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/solar--shop-2-linear.svg';
import AboutIcon from 'shared/assets/icons/solar--file-text-linear.svg';
import ProfileIcon from 'shared/assets/icons/solar--user-circle-linear.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        Icon: MainIcon,
        text: 'Главная'
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        Icon: AboutIcon,
        text: 'О сайте'
    },
    {
        path: RoutePath[AppRoutes.PROFILE],
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    }
];