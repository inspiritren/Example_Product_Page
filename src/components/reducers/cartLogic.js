import TShirt from '../../classic-tee.jpg';

const initState = {
    
    items: [
        {
            title: "Classic Tee",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 75,
            img: TShirt
        }
    ],
    
    sizes: [
        {size: "S"},
        {size: "M"},
        {size: "L"}
    ],
    
    addedItems: [],
    
    subTotal: 0

};

const cartLogic= (state = initState, action)=>{
    if (action.type === 'ADD_TO_CART') {
        if (action.size !== "") {
            let addedItem = state.sizes.find(item=> item.size === action.size);
            let existed_item= state.addedItems.find(item=> action.size === item.size);
            if (existed_item) {
                addedItem.quantity += 1;
                return {
                    ...state,
                    addedItems: [...state.addedItems],
                    subTotal: state.subTotal + 1
                }
            } else {
                addedItem.price = action.price;
                addedItem.title = action.title;
                addedItem.quantity = 1;
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    subTotal: state.subTotal + 1
                }
            }
        }
    }
    return state
};

export default cartLogic;
