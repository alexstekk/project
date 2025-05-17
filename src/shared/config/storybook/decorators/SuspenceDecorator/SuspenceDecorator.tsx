import { FunctionComponent, Suspense } from 'react';

export const SuspenceDecorator = (Story: FunctionComponent) => (
    <Suspense>
        <Story />
    </Suspense>
);
