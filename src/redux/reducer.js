

const initialState = {
    carts:[]
}

export const cartReducer = (state = initialState, action) =>{
    console.log("reducer file ->", action.payload)
    switch(action.type){
        case 'ADD_TO_CART':
            console.log("reducer logical part", action.payload)
            return{
                ...state,
                carts:[...state.carts, action.payload],
            };
            
        case 'REMOVE_TO_CART':
            return initialState - 1

        default:
            return initialState;
    }
}