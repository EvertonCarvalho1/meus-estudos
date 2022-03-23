import {useSelector, TypedUseSelectorHook} from 'react-redux';
import { RootState } from '../store'; //tipo

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;




