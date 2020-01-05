const initialState = { items: []};
export default (state= initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                items: action.payload
            }
        case 'REMOVE_FROM_CART':
            return{
                items: action.payload
            }
        default:
            return state;
    }
}