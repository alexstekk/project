import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const {className} = props;

    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    }


    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={toggleSidebar}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                {/*  LangSwitcher   */}
            </div>
        </div>
    );
};