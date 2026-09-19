import type { Ingredient, } from "./ingredient";

export interface OrderResponse {
  boyut: string;
  kalinlik: string;
  malzeme: Ingredient[];
  secimler: number;
  toplam: number;
}

export interface SuccessProps {
  apiResponse: OrderResponse[];
}