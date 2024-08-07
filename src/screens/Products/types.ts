export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    cart: boolean;
}

export interface Products {
    products: Product[];
}

export interface useProductScreenT {
    products?: Product[];
    buttonAdd: (id: number) => void;
    buttonRemove: (id: number) => void;
}
