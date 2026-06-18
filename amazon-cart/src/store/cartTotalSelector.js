import { selector } from "recoil";
import cartItemState from "./cartItemsState";

const cartTotalSelector = selector({
    key:'cartTotalSelector',
    get: ({get}) => {
        const cartItems = get(cartItemState);
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
        const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        return {total , itemCount};
    },

});    
export default cartTotalSelector;