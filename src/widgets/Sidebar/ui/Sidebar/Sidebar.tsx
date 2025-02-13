import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {Button} from "shared/ui/Button";
import {ButtonSize, ButtonVariants} from "shared/ui/Button/ui/Button";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import MainIcon from 'shared/assets/icons/solar--shop-2-linear.svg'
import AboutIcon from 'shared/assets/icons/solar--file-text-linear.svg'

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const {className} = props;

    const [collapsed, setCollapsed] = useState(false);

    const {t} = useTranslation();

    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
            data-testid="sidebar"
        >
            <Button
                onClick={toggleSidebar}
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                variant={ButtonVariants.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    variant={"inverted"}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>{t("Главная")}</span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>{t("О сайте")}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </div>
    );
};