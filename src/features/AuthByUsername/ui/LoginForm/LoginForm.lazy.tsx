import { FunctionComponent, lazy } from 'react';
import { LoginFormProps } from './LoginForm';


export const LoginFormLazy = lazy<FunctionComponent<LoginFormProps>>(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(import('./LoginForm'));
        }, 1500);
    });
});
