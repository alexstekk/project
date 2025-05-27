import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleBlockType } from '../../model/consts/articleConsts';
import {
    getArticlesDetailsData,
    getArticlesDetailsError,
    getArticlesDetailsIsLoading,
} from '../../model/selectors/getArticlesDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/Article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import { renderArticleBlock } from './RenderBlock';

import CalendarIcon from '@/shared/assets/icons/solar--calendar-outline.svg';
import EyeIcon from '@/shared/assets/icons/solar--eye-outline.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    useAppDispatch,
    useAppSelector,
} from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
    TextVariants,
} from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleDetails.module.scss';

interface articleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useAppSelector(getArticlesDetailsData);

    return (
        <>
            <div
                className={cls.avatarWrapper}
                data-testid={'ArticleDetails.Info'}
            >
                <AvatarDeprecated
                    size={200}
                    src={article?.img}
                    className={cls.avatar}
                />
            </div>
            <TextDeprecated
                className={cls.title}
                title={article?.title}
                text={article?.subtitle}
                size={TextSize.L}
            />

            <div className={cls.articleInfo}>
                <EyeIcon />
                <TextDeprecated text={String(article?.views)} />
            </div>
            <div className={cls.articleInfo}>
                <CalendarIcon />
                <TextDeprecated text={article?.createdAt} />
            </div>
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

const Redesigned = () => {
    const article = useAppSelector(getArticlesDetailsData);

    return (
        <>
            <Text title={article?.title} size={'sizeL'} bold />
            <Text title={article?.subtitle} size={'sizeM'} />
            <AppImage
                className={cls.img}
                src={article?.img}
                fallback={
                    <Skeleton width={'100%'} height={420} border={'16px'} />
                }
            />

            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

export const ArticleDetails = memo((props: articleDetailsProps) => {
    const { className, id } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(getArticlesDetailsIsLoading);
    const article = useAppSelector(getArticlesDetailsData);
    const error = useAppSelector(getArticlesDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <SkeletonDeprecated
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <SkeletonDeprecated
                    className={cls.title}
                    width={300}
                    height={32}
                />
                <SkeletonDeprecated
                    className={cls.skeleton}
                    width={600}
                    height={24}
                />
                <SkeletonDeprecated
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                />
                <SkeletonDeprecated
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                />
            </>
        );
    } else if (error) {
        content = (
            <TextDeprecated
                align={TextAlign.CENTER}
                variant={TextVariants.ERROR}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        );
    } else {
        content = (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={<Redesigned />}
                off={<Deprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.articleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
