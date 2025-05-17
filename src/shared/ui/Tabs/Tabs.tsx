import { ReactNode, memo, useCallback } from 'react';

import { Card, CardVariants } from '../Card/Card';

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
}

export const Tabs = memo((props: tabsProps) => {
    const { className, tabs, value, onTabClick } = props;

    const onClick = useCallback(
        (tabItem: TabItem) => {
            return () => {
                onTabClick(tabItem);
            };
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    variant={
                        tab.value === value
                            ? CardVariants.OUTLINE
                            : CardVariants.NORMAL
                    }
                    key={tab.value}
                    className={cls.tab}
                    onClick={onClick(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
