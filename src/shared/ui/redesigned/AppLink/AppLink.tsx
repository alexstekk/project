import { ForwardedRef, forwardRef } from 'react';
import { type LinkProps, NavLink } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'inverted' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    activeClassName?: string;
}

export const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            to,
            className,
            variant = 'primary',
            children,
            activeClassName = '',
            ...otherProps
        } = props;

        return (
            <NavLink
                to={to}
                ref={ref}
                className={({ isActive }) =>
                    classNames(cls.appLink, { [activeClassName]: isActive }, [
                        className,
                        cls[variant],
                    ])
                }
                {...otherProps}
            >
                {children}
            </NavLink>
        );
    },
);
