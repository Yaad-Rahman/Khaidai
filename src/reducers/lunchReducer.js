import _ from 'lodash';
export const lunch = (state= {}, action) => {
    switch(action.type) {
        case 'FETCH_PRODUCTS_1':
            return {...state, ..._.mapKeys(action.payload, 'id')};
            default:
                return state;
    }
};

export const dinner = (state= {}, action) => {
    switch(action.type) {
        case 'FETCH_PRODUCTS_2':
            return {...state, ..._.mapKeys(action.payload, 'id')};
            default:
                return state;
    }
};

export const beverage = (state= {}, action) => {
    switch(action.type) {
        case 'FETCH_PRODUCTS_3':
            return {...state, ..._.mapKeys(action.payload, 'id')};
            default:
                return state;
    }
};