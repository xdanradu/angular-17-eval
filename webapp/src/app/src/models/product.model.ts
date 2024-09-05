export interface Product {
    id: string,
    name: string,
    price: number,
    src: string
}

export interface CartItem extends Product {
    count: number
}