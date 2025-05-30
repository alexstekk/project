import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    //navigate?: (to: To, options?: NavigateOptions) => void;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers = {} } = props;

    // const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        // navigate
    );

    // console.log('render');

    return <Provider store={store}>{children}</Provider>;
};
