export interface AddProductDto {
  id?: string;
  name: string;
  qty: number;
  price: number;
}

export interface UpdateProductDto {
  id: string;
  qty?: number;
  price?: number;
}

export interface RemoveProductDto {
  id: string;
}
