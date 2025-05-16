import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

import { fetchNextArticlesPage } from './fetchNextArticlesPage';

import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('../fetchArticleList/fetchArticleList');

describe('fetchNextArticlesPage', () => {

    test('Fulfilled', async () => {

        // @ts-expect-error types
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            }
        });

        // @ts-expect-error types
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticleList).toBeCalled();

    });

    test('Not called', async () => {
        // @ts-expect-error types
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlePage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            }
        });
        // @ts-expect-error types
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();

    });
});