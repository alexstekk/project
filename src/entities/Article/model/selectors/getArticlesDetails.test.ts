import { StateSchema } from 'app/providers/StoreProvider';
import { getArticlesDetailsData, getArticlesDetailsError, getArticlesDetailsIsLoading } from './getArticlesDetails';

describe('getArticlesDetails', () => {

    test('Should return data', () => {

        const data = {
            id: '1',
            title: 'subtitle'
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            }
        };
        expect(getArticlesDetailsData(state as StateSchema)).toEqual(data);
    });

    test('Should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        };
        expect(getArticlesDetailsError(state as StateSchema)).toEqual('error');
    });

    test('Should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesDetailsError(state as StateSchema)).toEqual(undefined);
    });

    test('Should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            }
        };
        expect(getArticlesDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('Should return false', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesDetailsIsLoading(state as StateSchema)).toEqual(false);
    });

});