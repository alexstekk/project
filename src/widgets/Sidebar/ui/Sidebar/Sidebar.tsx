import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";

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
            <button
                onClick={toggleSidebar}
                data-testid="sidebar-toggle"
            >
                {t('Свернуть')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};