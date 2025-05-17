import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/Sidebar';

import { getUserAuthData } from '@/entities/User';
import ArticlesIcon from '@/shared/assets/icons/solar--document-outline.svg';
import AboutIcon from '@/shared/assets/icons/solar--file-text-linear.svg';
import MainIcon from '@/shared/assets/icons/solar--shop-2-linear.svg';
import ProfileIcon from '@/shared/assets/icons/solar--user-circle-linear.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';


export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'О сайте',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData?.id),
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticlesIcon,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
