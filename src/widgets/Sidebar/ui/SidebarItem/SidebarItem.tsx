import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';


interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { item, collapsed } = props;

    const { t } = useTranslation();

    return (
        <AppLink
            variant={'inverted'}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
};