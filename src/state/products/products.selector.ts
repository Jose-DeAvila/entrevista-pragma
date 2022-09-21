import { createFeatureSelector } from '@ngrx/store';
import { Product } from 'src/app/core/models/products.interfaces';

export const selectProducts = createFeatureSelector<Product[]>('products');
