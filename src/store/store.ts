import {PayloadAction, configureStore, createSlice} from '@reduxjs/toolkit';
import { Product } from './types';

const initialState = [] as Product[];

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct:(state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    deleteProduct:(state, action: PayloadAction<string>) => {
      return state.filter(product => product.type !== action.payload);
    },
    updateProduct:(state, action: PayloadAction<Product>) => {
      const {type, amount} = action.payload;
      const product = state.find(product => product.type === type);
      if (product) {
        product.amount = amount;
      }
    }
  },
});

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectProducts = (state: RootState) => state.products;

export default store;