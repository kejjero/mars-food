import {itemData} from "../../../@types/types";


export interface initialStateBuyPopup {
    totalPrice: number;
    countTypePrice: number;
    countSizePrice: number
    type: string;
    size: string;
    activeType: number;
    activeSize: number
    data: itemData
}
