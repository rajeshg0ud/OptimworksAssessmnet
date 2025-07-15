import {configureStore} from '@reduxjs/toolkit'
import slice from './slice';

const store= configureStore({
    reducer:{
        slicee:slice,
    }
})

export default store;