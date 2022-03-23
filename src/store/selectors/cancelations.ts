import { RootState } from '..';

export const getCancelations = (state: RootState) => state.cancelations;

export const getCancelationById = (state: RootState) => (id: number) => state.cancelations[id];
