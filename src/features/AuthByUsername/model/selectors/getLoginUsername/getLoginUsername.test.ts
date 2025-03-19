import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

describe('getLoginUsername', () => {
    test('Should return Username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username'
            }
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('username');
    });
    test('Should return empty string', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});