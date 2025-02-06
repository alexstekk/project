import {classNames} from "shared/lib/classNames/classNames";

describe('classNames', () => {
    test('with only main class', () => {
        expect(classNames('test1')).toBe('test1');
    });

    test('with additional class', () => {
        const expected = 'test1 add-class'
        expect(classNames('test1', {}, ['add-class'])).toBe(expected);
    })

    test('with additional and mods', () => {
        const expected = 'test1 add-class hovered scrollable'
        expect(classNames('test1', {'hovered': true, 'scrollable': true}, ['add-class'])).toBe(expected);
    })

    test('with additional and mods, one - false', () => {
        const expected = 'test1 add-class hovered'
        expect(classNames('test1', {'hovered': true, 'scrollable': false}, ['add-class'])).toBe(expected);
    })

    test('with additional and mods, one - undefined', () => {
        const expected = 'test1 add-class hovered'
        expect(classNames('test1', {'hovered': true, 'scrollable': undefined}, ['add-class'])).toBe(expected);
    })
})