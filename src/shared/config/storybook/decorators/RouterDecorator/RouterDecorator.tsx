import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: FunctionComponent) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
