export interface AddProductDto {
  id?: number;
  name: string;
  qty: number;
  price: number;
}

export interface UpdateProductDto {
  id: number;
  name: string;
  qty?: number;
  price?: number;
}

export interface RemoveProductDto {
  id: number;
}
