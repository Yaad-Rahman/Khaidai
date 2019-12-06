import products from '../apis/products';

export const signIn = () => (
    {
        type: 'SIGN_IN'
    }
);

export const signOut = () => (
    {
        type: 'SIGN_OUT'
    }
);


export const fetchProducts = () => async dispatch => {
    const response = await products.get('/products');

    dispatch({type: 'FETCH_PRODUCTS', payload: response.data});
};

