import type { Ingredient } from "./ingredient";

export type PizzaSize = "Küçük" | "Orta" | "Büyük";

export type PizzaThickness = "İnce" | "Orta" | "Kalın";

export type ValidatableField = "isim" | "malzeme";

export interface OrderFormData {
  boyut: PizzaSize;
  kalinlik: PizzaThickness;
  malzeme: Ingredient[];
  isim: string;
  not: string;
  adet: number;
}

export interface OrderFormProps {
  onSubmit: (form: OrderFormData, isValid: boolean) => void;
}

export interface OrderFormErrors {
  isim: boolean;
  malzeme: boolean;
}