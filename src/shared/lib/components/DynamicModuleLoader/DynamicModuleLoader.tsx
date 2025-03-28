import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/redux/reduxTypedHooks';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

//type ReducersListEntry = [StateSchemaKey, Reducer]


interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();


    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as keyof StateSchema, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return (() => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as keyof StateSchema);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        });

    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

    return (
        <>
            {children}
        </>
    );
};