import { memo, useMemo, useState } from 'react';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import {
    ButtonDeprecated,
    ButtonSize,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
                        { [cls.collapsedRedesigned]: collapsed },
                        [className],
                    )}
                    data-testid="sidebar"
                >
                    <AppLogo
                        className={cls.appLogo}
                        size={collapsed ? 30 : 50}
                    />
                    <VStack
                        className={cls.itemsRedesigned}
                        gap={'8'}
                        role={'navigation'}
                        align={collapsed ? 'center' : 'start'}
                    >
                        {itemsList}
                    </VStack>
                    <Icon
                        onClick={toggleSidebar}
                        data-testid="sidebar-toggle"
                        className={cls.collapseBtn}
                        Svg={<ArrowIcon width={32} height={32} />}
                        clickable
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} />
                    </div>
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
                    <ButtonDeprecated
                        onClick={toggleSidebar}
                        data-testid="sidebar-toggle"
                        className={cls.collapseBtn}
                        variant={ButtonVariants.BACKGROUND_INVERTED}
                        square
                        size={ButtonSize.L}
                    >
                        {collapsed ? '>' : '<'}
                    </ButtonDeprecated>

                    {/*<div className={cls.items}>*/}
                    {/*    {*/}
                    {/*        itemsList*/}
                    {/*    }*/}
                    {/*</div>*/}

                    <VStack className={cls.items} gap={'8'} role={'navigation'}>
                        {itemsList}
                    </VStack>
                </aside>
            }
        />
    );
});
