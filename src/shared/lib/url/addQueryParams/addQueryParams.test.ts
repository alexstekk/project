import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('with one parameter', () => {
        const params = getQueryParams({
            test: 'value'
        });
        expect(params).toEqual('?test=value');
    });
    test('with multiple parameters', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2',
        });
        expect(params).toEqual('?test=value&second=2');
    });
    test('with undefined parameters', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toEqual('?test=value');
    });
});