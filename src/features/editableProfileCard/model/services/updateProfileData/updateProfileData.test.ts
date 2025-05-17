import axios from 'axios';

import { ValidateProfileError } from '../../consts/editableProfileCardConsts';

import { updateProfileData } from './updateProfileData';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import avatar from '@/shared/assets/tests/storybook.jpeg';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';


const data: Profile = {
    first: 'Alex',
    lastname: 'Stekk',
    currency: Currency.RUB,
    country: Country.RUSSIA,
    age: 34,
    city: 'Krasnodar',
    username: 'admin',
    avatar,
};

jest.mock('axios');
jest.mocked(axios);

describe('updateProfileData', () => {
    test('success', async () => {
        // @ts-expect-error here

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: data },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        // @ts-expect-error here

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('server error', async () => {
        // @ts-expect-error here

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: data },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        // @ts-expect-error here

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('server error', async () => {
        // @ts-expect-error here

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: { ...data, lastname: '' } },
        });
        // @ts-expect-error here

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
