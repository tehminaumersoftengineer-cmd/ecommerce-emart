
export const addcart =(item) =>{
    console.log("Add to cart action called")
    return{
        type:"ADD_TO_CART",
        payload:item
    }
}

export const rmvcart =(item) =>{
    console.log("Remove to cart action called")
    return{
        type:"REMOVE_TO_CART",
        payload:item
    }
}