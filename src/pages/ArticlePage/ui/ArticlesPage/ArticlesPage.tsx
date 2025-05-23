import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import {
    getArticlesPageError,
    useArticleItemById,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlePageReducer } from '../../model/slice/articlePageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';

import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
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
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page as PageDeprecated } from '@/shared/ui/deprecated/Page';
import {
    Text as TextDeprecated,
    TextVariants,
} from '@/shared/ui/deprecated/Text';
import { Page } from '@/shared/ui/redesigned/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticlesPage.module.scss';

interface articlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: articlePageReducer,
};

const ArticlesPage = (props: articlePageProps) => {
    const { className } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const error = useAppSelector(getArticlesPageError);

    const articleItem = useArticleItemById('5');

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return (
            <div className={classNames(cls.articlePage, {}, [className])}>
                <TextDeprecated
                    variant={TextVariants.ERROR}
                    title={t('Произошла ошибка при загрузке списка статей')}
                />
            </div>
        );
    }

    const content = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <StickyContentLayout
                    content={
                        <Page
                            onScrollEnd={onLoadNextPart}
                            className={classNames(
                                cls.articlePageRedesigned,
                                {},
                                [className],
                            )}
                            data-testid={'ArticlesPage'}
                        >
                            <ArticleInfiniteList />
                            <ArticlePageGreeting />
                        </Page>
                    }
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                />
            }
            off={
                <PageDeprecated
                    onScrollEnd={onLoadNextPart}
                    className={classNames(cls.articlePage, {}, [className])}
                    data-testid={'ArticlesPage'}
                >
                    <VStack gap={'16'} max>
                        <ArticlesPageFilters />
                        <ArticleInfiniteList />
                    </VStack>
                    <ArticlePageGreeting />
                </PageDeprecated>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
