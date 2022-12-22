export interface Product {
    id: number;
    name: string;
    attributes: ProductAttributes[];
}

export interface ProductAttributes {
    code: string;
    name: string;
    color?: string;
    size?: {
        width: number;
        height: number;
    }
    weight?: number;
}