import axios from 'axios';
import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import avatar from 'shared/assets/tests/storybook.jpeg';

const data = {
    first: 'Alex',
    lastname: 'Stekk',
    age: 34,
    city: 'Krasnodar',
    username: 'admin',
    avatar,
};

jest.mock('axios');
jest.mocked(axios);
describe('fetchProfileData', () => {

    test('Fulfilled', async () => {

        // @ts-expect-error here
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        // @ts-expect-error here
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Rejected', async () => {
        // @ts-expect-error here
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        // @ts-expect-error here
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');

    });

});