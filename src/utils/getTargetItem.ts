export const getTargetItem = (cartItems: object[], payload: any) => {
    return cartItems.find((obj: any) => {
        return (
            obj.id === payload.id &&
            obj.type === payload.type &&
            obj.size === payload.size &&
            obj.title === payload.title
        )
    })
}
