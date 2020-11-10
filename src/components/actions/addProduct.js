export const addProduct = (size, title, price)=>{
    
    return {
        type: 'ADD_TO_CART',
        size,
        title,
        price }
    
};
