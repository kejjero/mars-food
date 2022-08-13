import {itemType} from "../redux/cart/types";

export const getTargetItem = (cartItems: itemType[], payload: itemType) => {
    return cartItems.find((obj: any) => {
        return (
            obj.id === payload.id &&
            obj.type === payload.type &&
            obj.size === payload.size &&
            obj.title === payload.title
        )
    })
}
