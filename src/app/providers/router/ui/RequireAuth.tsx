import { getUserAuthData, UserRole } from 'entities/User';
import { ReactNode, useMemo } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'shared/lib/hooks/redux/reduxTypedHooks';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { getUserRoles } from 'entities/User';

interface RequireAuthProps {
    children?: ReactNode;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {

    const auth = useAppSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useAppSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some(requredRole => {
            const hasRole = userRoles?.includes(requredRole);
            return hasRole;
        });
    }, [roles, userRoles]);


    if (!auth) {
        return <Navigate to={RoutePath[AppRoutes.MAIN]} state={{ from: location }} replace/>;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath[AppRoutes.FORBIDDEN]} state={{ from: location }} replace/>;
    }

    return children;
}
