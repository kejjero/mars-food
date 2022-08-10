export default interface itemData {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category?: number;
    rating?: number;
    price: number;
    property: {
        custom?: [
            {
                name: string;
                value: number;
            }
        ];
        size?: [
            {
                name: string;
                value: number;
            }
        ];
    }
}