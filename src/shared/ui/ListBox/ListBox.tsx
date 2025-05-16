import { Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import React, { ReactNode } from 'react';

import { Button } from '../Button';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import cls from './ListBox.module.scss';


export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

export interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
    label?: string;
}

export function ListBox(props: ListBoxProps) {

    const {
        className,
        items = [],
        onChange,
        value,
        defaultValue,
        readonly,
        label,
    } = props;

    const { theme } = useTheme();

    return (
        <HListBox
            value={value}
            onChange={onChange}
            as={'div'}
            disabled={readonly}
            className={classNames(cls.listBox, {}, [theme, className])}
        >
            {
                label && <span className={classNames(cls.option, { [cls.disabled]: readonly }, [])}>{label}</span>
            }
            <ListboxButton
                className={cls.trigger}
                as={'span'}
                disabled={readonly}
            >

                <Button
                    disabled={readonly}
                >
                    {value ?? defaultValue}
                </Button>
            </ListboxButton>
            <ListboxOptions
                anchor="bottom"
                className={classNames(cls.optionsList, {}, [theme])}
            >
                {
                    items.map((item: ListBoxItem) => (
                        <ListboxOption
                            key={item.value}
                            value={item.value}
                            as={React.Fragment}
                            disabled={item.disabled}
                        >
                            {({ focus, selected }) => (
                                <li
                                    className={classNames(cls.option, {
                                        [cls.focused]: focus,
                                        [cls.disabled]: item.disabled
                                    }, [])}
                                >
                                    {selected && '> '}
                                    {item.content}
                                </li>
                            )}
                        </ListboxOption>
                    ))
                }
            </ListboxOptions>
        </HListBox>
    );
}