import { useDispatch, useSelector } from 'react-redux';

import { StateSchema } from '@/app/providers/StoreProvider';
// eslint-disable-next-line alexstekk/layer-imports
import { AppDispatch } from '@/app/providers/StoreProvider/types/reduxAppTypes';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<StateSchema>();