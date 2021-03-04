import { createSlice } from '@reduxjs/toolkit';

import api from '../api';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        pending: false,
        savePending: false,
        products: [],
        error: null,
        hasMore: true,
    },
    reducers: {
        start: (state, action) => {
            state.pending = true;
        },
        setProducts: (state, action) => {
            state.pending = false;
            state.products = [
                ...state.products.slice(0, action.payload.offset),
                ...action.payload.data,
            ];
            if(action.payload.data.length < 20) {
                state.hasMore = false;
            } else {
                state.hasMore = true;
            }
        },
        setError: (state, action) => {
            state.pending = false;
            state.products = [];
            state.error = action.payload;
        },
        startSave: (state, action) => {
            state.savePending = true;
        },
        addProduct: (state, action) => {
            state.savePending = false;
            state.products = [...state.products, action.payload];
        },
        editProduct: (state, action) => {
            state.savePending = false;
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products = [...state.products.slice(0, index), action.payload, ...state.products.slice(index + 1)];
            }
        },
        setSaveError: (state, action) => {
            state.savePending = false;
            state.error = action.payload;
        },
        startDelete: (state, action) => {
            state.deletePending = true;
            state.productId = action.payload;
        },
        deleteProduct: (state, action) => {
            state.deletePending = false;
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products = [...state.products.slice(0, index), ...state.products.slice(index + 1)];
            }
        },
        setDeleteError: (state, action) => {
            state.deletePending = false;
            state.error = action.payload;
        }
    }
});

export const {
    start,
    setProducts,
    setError,
    startSave,
    addProduct,
    editProduct,
    setSaveError,
    startDelete,
    deleteProduct,
    setDeleteError,
} = productSlice.actions;

export const getProducts = state => state.product.products;
export const getProductsPending = state => state.product.pending;
export const getProductsSavePending = state => state.product.savePending;
export const getProductsDeletePending = state => state.product.deletePending;
export const getProductsError = state => state.product.error;
export const getProductId = state => state.product.productId;
export const hasMoreProducts = state => state.product.hasMore;

export const fetchProductsAction = (queryParams) => {
    return dispatch => {        
        let query = '';
        if (queryParams) {
            if(queryParams.offset === 0) {
                dispatch(setProducts({ // reset products
                    data: [],
                    offset: 0,
                }));
            }
            query = Object.keys(queryParams)
                .filter(key => queryParams[key] || queryParams[key] === 0)
                .map(key => {
                    return `${key}=${queryParams[key]}`;
                }).join('&');
            if (query) {
                query = `?${query}`;
            }
        }
        dispatch(start());
        api.get('products' + query)
            .then(response => {
                if (!queryParams.offset) {
                    dispatch(setProducts({
                        data: response.data,
                        offset: 0,
                    }));
                } else {
                    dispatch(setProducts({
                        data: response.data,
                        offset: queryParams.offset,
                    }));
                }
                return response;
            })
            .catch(error => {
                dispatch(setError(error));
            })
    }
}

export const addProductAction = (productDto, success) => {
    return dispatch => {
        dispatch(startSave());
        api.post('products', productDto)
            .then(response => {
                dispatch(addProduct(response.data));
                if (success) {
                    success();
                }
                return response;
            })
            .catch(error => {
                dispatch(setSaveError(error));
            })
    }
}


export default productSlice.reducer;