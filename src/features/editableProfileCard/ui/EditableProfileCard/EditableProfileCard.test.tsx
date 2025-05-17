import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { profileReducer } from '../../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';


const mockData: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 34,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Krasnodar',
    username: 'admin',
    avatar: 'https://t4.ftcdn.net/jpg/03/21/43/07/360_F_321430761_qQi0CU9tzI5w1k1vJgdA02LMtXtsXvJE.jpg',
};

describe('features/EditableProfileCard', () => {
    beforeEach(() => {
        componentRender(<EditableProfileCard id={'1'} />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: mockData,
                    form: mockData,
                },
                user: {
                    authData: {
                        id: '1',
                    },
                },
            },
            asyncReducers: {
                profile: profileReducer,
            },
        });
    });

    test('Change readonly mode', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test("Cancel button shouldn't save form data", async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.type(
            screen.getByTestId('ProfileCard.Firstname'),
            'user',
        );

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user');

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        );

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue(
            'admin',
        );
    });

    test('Error should happen', async () => {
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Text'),
        ).toBeInTheDocument();
    });

    // test('Send PUT request with correct data', async () => {
    //
    //     const mockPutReq = jest.spyOn($api, 'put');
    //     await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    //     await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
    //     await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
    //
    //     expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument();
    //     expect(mockPutReq).toHaveBeenCalled();
    // });
});
