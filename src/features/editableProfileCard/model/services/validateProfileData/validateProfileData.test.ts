import axios from 'axios';
import { validateProfileData } from './validateProfileData';
import avatar from 'shared/assets/tests/storybook.jpeg';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { ValidateProfileError } from '../../consts/editableProfileCardConsts';

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

describe('fetchProfileData', () => {

    test('Success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('Fail with name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);

    });

    test('Fail with age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);

    });

    test('Fail with country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

});