import axios from 'axios';

import { fetchProfileData } from './fetchProfileData';

import avatar from '@/shared/assets/tests/storybook.jpeg';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

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

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('Rejected', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');

    });

});