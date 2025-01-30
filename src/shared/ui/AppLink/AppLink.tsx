import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {PropsWithChildren} from "react";
import {Link, LinkProps} from "react-router-dom";

type Theme = 'primary' | 'inverted';

interface AppLinkProps extends PropsWithChildren<LinkProps> {
    className?: string;
    theme?: Theme;
}


export const AppLink = (props: AppLinkProps) => {

    const {
        to,
        className,
        theme = 'primary',
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(
                cls.appLink,
                {},
                [className, cls[theme]]
            )}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
