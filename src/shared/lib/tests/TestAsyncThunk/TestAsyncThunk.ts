import { StateSchema } from 'app/providers/StoreProvider';
import { Action, AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

export type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {

    dispatch: Dispatch<Action>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: typeof jest.fn;

    constructor(
        actionCreator?: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator!;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const actionCreator = this.actionCreator(arg);
        const result = await actionCreator(
            this.dispatch,
            this.getState,
            {
                api: this.api,
                navigate: this.navigate,
            });

        return result;
    }
}