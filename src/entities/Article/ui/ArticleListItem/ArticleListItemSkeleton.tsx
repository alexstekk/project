import { memo } from 'react';

import { ArticleView } from '../../model/consts/articleConsts';

import cls from './ArticleListItemRedesigned/ArticleListItemRedesigned.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Card, Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import {
    Skeleton,
    Skeleton as SkeletonRedesigned,
} from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            off: () => SkeletonDeprecated,
            on: () => SkeletonRedesigned,
        });

        const Card = toggleFeatures({
            name: 'isAppRedesigned',
            // @ts-ignore
            off: () => CardDeprecated,
            on: () => CardRedesigned,
        });

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={classNames(cls.ArticleListItemSkeleton, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card className={cls.card} max>
                        <div className={cls.header}>
                            <Skeleton
                                className={cls.avatar}
                                height={30}
                                width={30}
                                border={'50%'}
                            />
                            <Skeleton
                                className={cls.username}
                                width={150}
                                height={16}
                            />
                            <Skeleton
                                className={cls.date}
                                width={150}
                                height={16}
                            />
                        </div>
                        <Skeleton
                            height={24}
                            width={250}
                            className={cls.types}
                        />
                        <Skeleton height={200} className={cls.img} />
                        <div className={cls.footer}>
                            <Skeleton height={36} width={200} />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div
                className={classNames(cls.ArticleListItemSkeleton, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card} corners="roundCorners" padding={'0'}>
                    <Skeleton width={'100%'} height={250} />
                    <VStack className={cls.info} gap="4">
                        <Skeleton width={200} height={32} />
                        <Skeleton width={180} height={32} />
                        <Skeleton width={220} height={32} />
                        <VStack gap="8" className={cls.footer} max>
                            <HStack justify="between" max>
                                <Skeleton width={80} height={24} />
                                <Skeleton width={80} height={24} />
                            </HStack>
                            <HStack gap="8">
                                <Skeleton
                                    width={32}
                                    height={32}
                                    border={'50%'}
                                />
                                <Skeleton width={60} height={24} />
                            </HStack>
                        </VStack>
                    </VStack>
                </Card>
            </div>
        );
    },
);
