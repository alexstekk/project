import { screen } from '@testing-library/react';

import { AppRouter } from './AppRouter';

import { UserRole } from '@/entities/User';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('app/router/Approuter', () => {

    test('Страница отрисовывается', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAbout()
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Страница не найдена', async () => {
        componentRender(<AppRouter/>, {
            route: '/randomUrl'
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Редирект на главную если пользователь не авторизован', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteProfile('1')
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Редирект на главную если пользователь не авторизован', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        id: '1'
                    }
                }
            }
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ запрещен, нет роли', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {}
                }
            }
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ разрешен, есть роль', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        id: '1',
                        roles: [UserRole.ADMIN]
                    }
                }
            }
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});