import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/Article';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';


interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view,
    } = props;


    if (view === ArticleView.BIG) {

        return (
            <div className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton className={cls.avatar} height={30} width={30} border={'50%'}/>
                        <Skeleton className={cls.username} width={150} height={16}/>
                        <Skeleton className={cls.date} width={150} height={16}/>
                    </div>
                    <Skeleton
                        height={24}
                        width={250}
                        className={cls.types}
                    />
                    <Skeleton height={200} className={cls.img}/>
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200}/>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[view]])}

        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton
                        width={200}
                        height={200}
                        className={cls.img}
                    />

                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16}/>
                </div>
                <Skeleton width={150} height={16}/>
            </Card>
        </div>
    );
});