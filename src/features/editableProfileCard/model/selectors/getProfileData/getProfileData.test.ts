import { getProfileData } from './getProfileData';

import { StateSchema } from '@/app/providers/StoreProvider';
import avatar from '@/shared/assets/tests/storybook.jpeg';


describe('getProfileData', () => {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
