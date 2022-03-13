export const initialState = {
    cart: [],
    user: null
}

const reducer = (state, action) =>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state, cart: [...state.cart, action.item],
            };
        case 'REMOVE_FROM_CART':
            // return{
            //     ...state,
            //     cart: state.cart.filter(item=>item.id !== action.id)
            // }
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
            let newCart = [...state.cart];
            if(index>=0){
                newCart.splice(index,1);

            }
            else{
                console.warn("Can't remove product (id: ${action.id}) as it is not in Cart!")
            }
            return{
                ...state,
                cart: newCart
            }
            case 'SET_USER':
                return{
                    ...state,
                    user: action.user,
                }
        default:
            return state;
    }
}

export default reducer