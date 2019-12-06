export default (state, action) => {
    if (state === undefined) {
        return {
            cart: []
        }
    }

    switch (action.type) {
        case 'ADD_TO_CART': {

        }
        case 'REMOVE_FROM_CART': {

        }
        default:
            return state;
    }
}