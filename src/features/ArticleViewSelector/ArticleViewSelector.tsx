import { memo } from 'react';

import { ArticleView } from '../../entities/Article/model/consts/articleConsts';

import ListIcon from '@/shared/assets/icons/burger.svg';
import ListIconDeprecated from '@/shared/assets/icons/solar--list-outline.svg';
import GridIconDeprecated from '@/shared/assets/icons/solar--widget-outline.svg';
import GridIcon from '@/shared/assets/icons/tile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import {
    ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleViewSelector.module.scss';

interface articleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => <GridIcon width={32} height={32} />,
            off: () => <GridIconDeprecated />,
        }),
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => <ListIcon width={32} height={32} />,
            off: () => <ListIconDeprecated />,
        }),
    },
];

export const ArticleViewSelector = memo((props: articleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (view: ArticleView) => () => {
        onViewClick?.(view);
    };

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    className={classNames(
                        cls.articleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                    corners={'roundCorners'}
                >
                    <HStack>
                        {viewTypes.map((viewType) => (
                            <Icon
                                className={classNames(
                                    cls.btn,
                                    {
                                        [cls.notSelected]:
                                            viewType.view !== view,
                                    },
                                    [className],
                                )}
                                Svg={viewType.icon}
                                clickable={true}
                                onClick={onClick?.(viewType.view)}
                                key={viewType.view}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls.articleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            onClick={onClick?.(viewType.view)}
                            key={viewType.view}
                            variant={ButtonVariants.CLEAR}
                            className={classNames(
                                '',
                                { [cls.active]: viewType.view === view },
                                [className],
                            )}
                        >
                            {viewType.icon}
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
});
