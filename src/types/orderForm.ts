import type { Ingredient } from "./ingredient";

export type PizzaSize = "Küçük" | "Orta" | "Büyük";

export type PizzaThickness = "İnce" | "Orta" | "Kalın";

export interface OrderFormData {
  boyut: PizzaSize;
  kalinlik: PizzaThickness;
  malzeme: Ingredient[];
  isim: string;
  not: string;
  adet: number;
}