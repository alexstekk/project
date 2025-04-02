import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useAppSelector } from 'shared/lib/hooks/redux/reduxTypedHooks';
import { getUserAuthData } from 'entities/User';

const AppRouter = memo(() => {

    const isAuth = useAppSelector(getUserAuthData);

    const routes = useMemo(() => {
        return routeConfig.filter(route => !(route.authOnly && !isAuth));
    }, [isAuth]);

    return (
        <div className="pageWrapper">
            <Suspense fallback={<PageLoader/>}>
                <Routes>
                    {
                        routes.map(({ path, element }) => (
                            <Route
                                key={path}
                                path={path}
                                element={element}
                            />
                        ))
                    }
                </Routes>
            </Suspense>
        </div>
    );
});

export { AppRouter };