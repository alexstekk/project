import { getLoginIsLoading } from './getLoginIsLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginIsLoading', () => {
    test('Should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            }
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('Should return false', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});