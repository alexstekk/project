import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ButtonVariants } from 'shared/ui/Button/ui/Button';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    };


    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
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
                {
                    SidebarItemsList.map((item) =>
                        <SidebarItem
                            key={item.text}
                            item={item}
                            collapsed={collapsed}
                        />
                    )
                }
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </div>
    );
});