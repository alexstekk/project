import { useEffect } from 'react';

import { Navbar } from '../widgets/Navbar/ui/Navbar';

import { AppRouter } from './providers/router';

import { getUserInited, initAuthData } from '@/entities/User';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
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

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
    }

    return (
        <div className={classNames('appRedesigned', {}, [theme])}>
                            <MainLayout
                                header={<Navbar />}
                                content={<AppRouter />}
                                sidebar={<Sidebar />}
                                toolbar={<div></div>}
                            />
                        </div>
    );
};
