import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/Sidebar';

import { getUserAuthData } from '@/entities/User';
import ArticlesIcon from '@/shared/assets/icons/solar--document-outline.svg';
import AboutIcon from '@/shared/assets/icons/solar--file-text-linear.svg';
import MainIcon from '@/shared/assets/icons/solar--shop-2-linear.svg';
import ProfileIcon from '@/shared/assets/icons/solar--user-circle-linear.svg';
import { AppRoutes, RoutePath } from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath[AppRoutes.MAIN],
                Icon: MainIcon,
                text: 'Главная'
            },
            {
                path: RoutePath[AppRoutes.ABOUT],
                Icon: AboutIcon,
                text: 'О сайте'
            }
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath[AppRoutes.PROFILE] + userData?.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath[AppRoutes.ARTICLES],
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    }
);