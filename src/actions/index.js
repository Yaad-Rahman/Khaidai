import products from '../apis/products';

export const signIn = (userId) => (
    {
        type: 'SIGN_IN',
        paload: userId
    }
);

export const signOut = () => (
    {
        type: 'SIGN_OUT'
    }
);


export const fetchProducts = () => async dispatch => {
    const response = await products.get('/Products/1');

    dispatch({type: 'FETCH_PRODUCTS', payload: response.data});
};

export const fetchProducts1 = () => async dispatch => {
    const response = await products.get('/Products/2');

    dispatch({type: 'FETCH_PRODUCTS_1', payload: response.data});
};

export const fetchProducts2 = () => async dispatch => {
    const response = await products.get('/Products/3');

    dispatch({type: 'FETCH_PRODUCTS_2', payload: response.data});
};

export const fetchProducts3 = () => async dispatch => {
    const response = await products.get('/Products/4');

    dispatch({type: 'FETCH_PRODUCTS_3', payload: response.data});
};
