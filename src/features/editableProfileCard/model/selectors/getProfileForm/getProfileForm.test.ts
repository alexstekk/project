import { getProfileForm } from './getProfileForm';

import { StateSchema } from '@/app/providers/StoreProvider';
import avatar from '@/shared/assets/tests/storybook.jpeg';


describe('getProfileForm', () => {
    test('Should return state', () => {
        const data = {
            first: 'Alex',
            lastname: 'Stekk',
            age: 34,
            city: 'Krasnodar',
            username: 'admin',
            avatar,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
