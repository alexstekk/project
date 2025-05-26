import { Profile } from '../../model/types/Profile';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export const validKeyboardKeys = {
    BACKSPACE: 'Backspace',
    ARROWRIGHT: 'ArrowRight',
    ARROWLEFT: 'ArrowLeft',
} as const;
