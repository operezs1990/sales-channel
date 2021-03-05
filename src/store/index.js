import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger'
import thunk from 'redux-thunk'

import productReducer from '../reducers/productSlice';


export default configureStore({
    reducer: {
        product: productReducer,
    },
    middleware: [thunk]
});