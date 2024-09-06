export interface Product {
    id: string,
    name: string,
    price: number,
    src: string
}

export interface CartItem extends Product {
    count: number
}

export const LOCAL_STORAGE_AUTH_KEY = 'auth';

export interface UserAuth {
  token: string
}

export interface UserLogin {
  username: string,
  password: string
}

export interface User {
  email: string
}
