import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';

describe('getLoginPassword', () => {
    test('Should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password'
            }
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });
    test('Should return empty string', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});