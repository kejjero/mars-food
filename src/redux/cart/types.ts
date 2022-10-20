export type itemType = {
    count: number;
    id: number;
    imageUrl: string;
    price: number;
    size: string;
    title: string;
    type: string;
}

export interface initialStateCart {
    cartCount: number;
    cartPrice: number;
    cartItems: itemType[];
    persons: number;
}