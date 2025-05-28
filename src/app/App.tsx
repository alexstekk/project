import { ComponentType, ReactNode, Suspense, useEffect } from 'react';

import { Navbar } from '../widgets/Navbar/ui/Navbar';

import { useAppToolbar } from './lib/useAppToolbar';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';
import { AppRouter } from './providers/router';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { getUserInited, initAuthData, useJsonSettings } from '@/entities/User';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import {
    useAppDispatch,
    useAppSelector,
} from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

export const App = () => {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    const inited = useAppSelector(getUserInited);

    const toollbar = useAppToolbar();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return (
            <div
                className={classNames(
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => 'appRedesigned',
                        off: () => 'app',
                    }),
                    {},
                    [theme],
                )}
                id={'app'}
            >
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<AppLoaderLayout />}
                    off={<PageLoader />}
                />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div className={classNames('app', {}, [theme])} id={'app'}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="contentPage">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div
                    className={classNames('appRedesigned', {}, [theme])}
                    id={'app'}
                >
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                            toolbar={toollbar}
                        />
                    </Suspense>
                </div>
            }
        />
    );
};

export default withTheme(App);
