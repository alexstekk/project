import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux/reduxTypedHooks';
import { useEffect } from 'react';
import { getUserInited, userActions } from 'entities/User';


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

