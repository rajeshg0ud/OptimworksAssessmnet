import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import resDataMenu from './searchInput';

const store= configureStore({
    reducer:{
        cart: cartSlice,
        search: resDataMenu
    },
});

export default store;