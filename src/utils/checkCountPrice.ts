import {itemType} from "../redux/cart/types";

export const checkCountPrice = (items: itemType[]) => {
    return items.reduce((sum: number, currentItem: any) => {
        return sum + currentItem.count
    }, 0)
}