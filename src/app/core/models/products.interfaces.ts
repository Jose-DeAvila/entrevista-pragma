export interface ProductService {
    msg: string;
    products: Product[];
}

export interface Product {
    alias: string;
    availableBalance: number;
    balanceWithlineCredit: number;
    currency: string;
    descriptionDisplay?: string;
    productName: string;
    productNameCore: string;
    productNumber: string;
    productStatus: string;
    productType: string;
}
