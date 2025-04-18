import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';

export type AppLinkVariant = 'primary' | 'inverted';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
}


export const AppLink = memo((props: AppLinkProps) => {

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
            className={classNames(cls.appLink, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
