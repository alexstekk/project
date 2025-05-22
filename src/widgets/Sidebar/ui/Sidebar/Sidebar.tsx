import { memo, useMemo, useState } from 'react';


import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { AppLogo } from '@/shared/ui/deprecated/AppLogo';
import {
    Button,
    ButtonSize,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const SidebarItemsList = useAppSelector(getSidebarItems);

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => {
        return SidebarItemsList.map((item) => (
            <SidebarItem key={item.text} item={item} collapsed={collapsed} />
        ));
    }, [SidebarItemsList, collapsed]);

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <aside
                    className={classNames(
                        cls.sidebarRedesigned,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                    data-testid="sidebar"
                >
                    <AppLogo className={cls.appLogo} />
                </aside>
            }
            off={
                <aside
                    className={classNames(
                        cls.sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
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

                    <VStack className={cls.items} gap={'8'} role={'navigation'}>
                        {itemsList}
                    </VStack>

                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} />
                    </div>
                </aside>
            }
        />
    );
});
