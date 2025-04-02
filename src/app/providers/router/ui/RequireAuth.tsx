import { getUserAuthData } from 'entities/User';
import { ReactNode } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'shared/lib/hooks/redux/reduxTypedHooks';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: ReactNode }) {

    const auth = useAppSelector(getUserAuthData);
    const location = useLocation();
    const navigate = useNavigate();

    if (!auth) {
        navigate(RoutePath.main);
        return <Navigate to={RoutePath.main} state={{ from: location }} replace/>;
    }

    return children;
}
