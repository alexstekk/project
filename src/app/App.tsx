import { Suspense, useEffect } from 'react';

import { Navbar } from '../widgets/Navbar/ui/Navbar';

import { AppRouter } from './providers/router';

import { useAppToolbar } from '@/app/lib/useAppToolbar';
import { getUserInited, initAuthData } from '@/entities/User';
import { ScrollToTopButton } from '@/features/scrollToTopButton';
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
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
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
