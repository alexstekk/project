import { BrowserRouter } from 'react-router-dom';
import { FunctionComponent } from 'react';

export const RouterDecorator = (Story: FunctionComponent) => (
    <BrowserRouter>
        <Story/>
    </BrowserRouter>
);