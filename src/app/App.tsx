import { useEffect } from 'react';

import { Navbar } from '../widgets/Navbar/ui/Navbar';

import { AppRouter } from './providers/router';

import { getUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Sidebar } from '@/widgets/Sidebar';


export const App = () => {

    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    const inited = useAppSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return <div className={classNames('app', {}, [theme])}>
        <Navbar/>
        <div className="contentPage">
            <Sidebar/>
            {inited && <AppRouter/>}
        </div>
    </div>;
};

