import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/products.interfaces';

export const setProducts = createAction(
    '[Product Service] Save Products',
    props<{products: Product[]}>()
);
export const resetProducts = createAction('[Product Service] Reset Products');
