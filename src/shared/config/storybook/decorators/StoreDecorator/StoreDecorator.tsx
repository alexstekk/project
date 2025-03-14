import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';


export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story) => {

    return <StoreProvider initialState={state as StateSchema}>
        <Story/>
    </StoreProvider>;
};