import { createReducer, on } from '@ngrx/store';
import { setProducts, resetProducts } from './products.actions';

export const initialState = [];

export const productReducer = createReducer(
    initialState,
    on(setProducts, (state, { products }) => state.concat(products)),
    on(resetProducts, (state) => state.slice(state.length)),
);
