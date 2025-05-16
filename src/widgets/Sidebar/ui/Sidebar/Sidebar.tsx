import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { ButtonSize, ButtonVariants } from '@/shared/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from '@/shared/ui/Stack';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const SidebarItemsList = useAppSelector(getSidebarItems);

    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    };

    const itemsList = useMemo(() => {
        return SidebarItemsList.map((item) =>
            <SidebarItem
                key={item.text}
                item={item}
                collapsed={collapsed}
            />
        );
    }, [SidebarItemsList, collapsed]);


    return (
        <aside
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

            {/*<div className={cls.items}>*/}
            {/*    {*/}
            {/*        itemsList*/}
            {/*    }*/}
            {/*</div>*/}

            <VStack
                className={cls.items}
                gap={'8'}
                role={'navigation'}
            >
                {
                    itemsList
                }
            </VStack>

            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </aside>
    );
});