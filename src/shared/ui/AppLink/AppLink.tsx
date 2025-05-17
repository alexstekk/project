import { ForwardedRef, forwardRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'inverted';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
}

export const AppLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            to,
            className,
            variant = 'primary',
            children,
            ...otherProps
        } = props;

        return (
            <Link
                to={to}
                ref={ref}
                className={classNames(cls.appLink, {}, [
                    className,
                    cls[variant],
                ])}
                {...otherProps}
            >
                {children}
            </Link>
        );
    },
);
