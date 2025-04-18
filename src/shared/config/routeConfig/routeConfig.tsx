import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlePage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articles_details',
    ARTICLE_CREATE = 'articles_create',
    ARTICLE_EDIT = 'articles_edit',
    //last
    NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
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
        path: RoutePath[AppRoutes.ARTICLES],
        element: <ArticlesPage/>,
        authOnly: true,

    },
    {
        path: `${RoutePath[AppRoutes.ARTICLE_DETAILS]}:id`,
        element: <ArticleDetailsPage/>,
        authOnly: true,

    },
    {
        path: `${RoutePath[AppRoutes.PROFILE]}:id`,
        element: <ProfilePage/>,
        authOnly: true,
    },
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage/>
    },
    {
        path: RoutePath[AppRoutes.ARTICLE_CREATE],
        element: <ArticleEditPage/>,
        authOnly: true,
    },
    {
        path: RoutePath[AppRoutes.ARTICLE_EDIT],
        element: <ArticleEditPage/>,
        authOnly: true,

    },
];