import { Dispatch, SetStateAction } from '../../node_modules/react';

export declare function usePropState<T>(initial: T): [T, Dispatch<SetStateAction<T>>];
