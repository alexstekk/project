import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    //last
    NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    //last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: AppRoutesProps[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage/>

    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage/>
    },
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage/>
    },
    {
        path: RoutePath[AppRoutes.PROFILE],
        element: <ProfilePage/>,
        authOnly: true,
    }

];