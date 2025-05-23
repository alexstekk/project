import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '../../entities/Article/model/consts/articleConsts';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { TabItem, Tabs } from '@/shared/ui/redesigned/Tabs';

interface articleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: articleTypeTabsProps) => {
    const { className, value, onChangeType } = props;

    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => {
        return Object.entries(ArticleType).map(([value, content]) => {
            return { value, content: t(content) };
        });
    }, [t]);

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Tabs
                    className={classNames('', {}, [className])}
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    direction={'column'}
                />
            }
            off={
                <TabsDeprecated
                    className={classNames('', {}, [className])}
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                />
            }
        />
    );
});
