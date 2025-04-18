import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

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
        expect(fetchArticleList).toBeCalledWith({ page: 3 });

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