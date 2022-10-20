import {itemType} from "../redux/cart/types";

export const checkCartPrice = (items: itemType[]) => {
    return items.reduce((sum: number, currentItem: any) => {
        return sum + currentItem.count * currentItem.price
    }, 0)
}