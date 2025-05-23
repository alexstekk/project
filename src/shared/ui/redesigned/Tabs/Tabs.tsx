import { ReactNode, memo, useCallback } from 'react';

import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface tabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo((props: tabsProps) => {
    const { className, tabs, value, onTabClick, direction = 'row' } = props;

    const onClick = useCallback(
        (tabItem: TabItem) => {
            return () => {
                onTabClick(tabItem);
            };
        },
        [onTabClick],
    );

    return (
        <Flex
            className={classNames(cls.tabs, {}, [className])}
            gap={'8'}
            direction={direction}
            align={'start'}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;

                return (
                    <Card
                        variant={isSelected ? 'light' : 'normal'}
                        key={tab.value}
                        className={cls.tab}
                        onClick={onClick(tab)}
                        corners={'roundCorners'}
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});
