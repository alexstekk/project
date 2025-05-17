import isLokiRunning from '@loki/is-loki-running';
import React, { FunctionComponent } from 'react';

const DisableAnimationsContext = React.createContext(false);

export const withDisabledAnimations = (Story: FunctionComponent) => (
    <DisableAnimationsContext.Provider value={isLokiRunning()}>
        <Story/>
    </DisableAnimationsContext.Provider>);

