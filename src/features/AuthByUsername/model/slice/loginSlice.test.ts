import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { LoginSchema } from 'features/AuthByUsername';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123')
        )).toEqual({ username: '123' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123')
        )).toEqual({ password: '123' });
    });
});