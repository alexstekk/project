import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Fragment, ReactNode } from 'react';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items?: DropdownItem[];
    trigger?: ReactNode;
}

export function Dropdown(props: DropdownProps) {

    const {
        className,
        trigger,
        items,
    } = props;

    const { theme } = useTheme();

    return (
        <Menu className={classNames(cls.dropDown, {}, [className, theme])} as={'div'}>
            <MenuButton className={cls.button}>
                {trigger}
            </MenuButton>
            <MenuItems anchor="bottom end" className={classNames(cls.items, {}, [className, theme])}>
                {
                    items?.map((item) => {
                        const content = ({ active }: { active: boolean }) => (
                            <button
                                className={classNames(cls.item, { [cls.active]: active }, [])}
                                disabled={item.disabled}
                                onClick={item.onClick}
                                key={item.href}
                            >
                                {item.content}
                            </button>
                        );

                        if (item.href) {
                            return (
                                <MenuItem as={AppLink} to={item.href} key={item.href} disabled={item.disabled}>
                                    {content}
                                </MenuItem>
                            );
                        }

                        return (
                            <MenuItem as={Fragment} key={String(item.content)} disabled={item.disabled}>
                                {content}
                            </MenuItem>
                        );
                    })
                }
            </MenuItems>
        </Menu>
    );
}