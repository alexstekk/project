import {
    Listbox as HListBox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import type { AnchorPropsWithSelection } from '@headlessui/react/dist/internal/floating';
import React, { ReactNode, useMemo } from 'react';

import { Button } from '../Button';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import cls from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

export interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange?: (value: T) => void;
    readonly?: boolean;
    label?: string;
    anchor?: AnchorPropsWithSelection;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        items = [],
        onChange,
        value,
        defaultValue,
        readonly,
        label,
        anchor = 'bottom',
    } = props;

    const { theme } = useTheme();

    const selectedItem = useMemo(() => {
        return items.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HListBox
            value={value}
            onChange={onChange}
            as={'div'}
            disabled={readonly}
            className={classNames(cls.listBox, {}, [theme, className])}
        >
            {label && (
                <span
                    className={classNames(
                        cls.option,
                        { [cls.disabled]: readonly },
                        [],
                    )}
                >
                    {label}
                </span>
            )}
            <ListboxButton
                className={cls.trigger}
                as={'span'}
                disabled={readonly}
            >
                <Button disabled={readonly} variant={'filled'}>
                    {selectedItem?.content ?? defaultValue}
                </Button>
            </ListboxButton>
            <ListboxOptions
                anchor={anchor}
                className={classNames(cls.optionsList, {}, [theme])}
            >
                {items.map((item: ListBoxItem<T>) => (
                    <ListboxOption
                        key={item.value}
                        value={item.value}
                        as={React.Fragment}
                        disabled={item.disabled}
                    >
                        {({ focus, selected }) => (
                            <li
                                className={classNames(
                                    cls.option,
                                    {
                                        [cls.focused]: focus,
                                        [cls.disabled]: item.disabled,
                                        [cls.selected]: selected,
                                    },
                                    [],
                                )}
                            >
                                {selected && '> '}
                                {item.content}
                            </li>
                        )}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </HListBox>
    );
}
