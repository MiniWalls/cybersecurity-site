import {PayloadAction, configureStore, createSlice} from '@reduxjs/toolkit';
import { Product } from './types';


export const productSlice = createSlice({
  name: 'products',
  initialState: [] as Product[],
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

export const stateSlice = createSlice({
  name: 'appStates',
  initialState: {categoryState: "", loggedin: false, username: ""},
  reducers: {
    setCategoryState: (state, action: PayloadAction<string>) => {
      console.log("well the reducer was called???");
      state.categoryState = action.payload;
    }
  }
});

export const categorySlice = createSlice({
  name: 'category',
  initialState: ["test"] as string[],
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    deleteCategories: () => {
      return [];
    }
  }
});

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
export const { setCategoryState } = stateSlice.actions;
export const { addCategory, deleteCategories } = categorySlice.actions;

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    appStates: stateSlice.reducer,
    category: categorySlice.reducer
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectProducts = (state: RootState) => state.products;
export const selectState = (state: RootState) => state.appStates;
export const selectCategory = (state: RootState) => state.category;

export default store;