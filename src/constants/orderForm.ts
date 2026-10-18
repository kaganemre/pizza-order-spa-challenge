import type { Ingredient } from "../types/ingredient";
import type { PizzaSize } from "../types/orderForm";

export const ingredientList: Ingredient[] = [
  { name: "Pepperoni", malzeme: "Pepperoni", isChecked: true },
  { name: "Sosis", malzeme: "Sosis", isChecked: true },
  { name: "Kanada Jambonu", malzeme: "Kanada Jambonu", isChecked: false },
  { name: "Tavuk Izgara", malzeme: "Tavuk Izgara", isChecked: false },
  { name: "Soğan", malzeme: "Soğan", isChecked: false },
  { name: "Domates", malzeme: "Domates", isChecked: false },
  { name: "Mısır", malzeme: "Mısır", isChecked: true },
  { name: "Brokoli", malzeme: "Brokoli", isChecked: false },
  { name: "Jalepeno", malzeme: "Jalepeno", isChecked: true },
  { name: "Sarımsak", malzeme: "Sarımsak", isChecked: false },
  { name: "Biber", malzeme: "Biber", isChecked: false },
  { name: "Sucuk", malzeme: "Sucuk", isChecked: false },
  { name: "Ananas", malzeme: "Ananas", isChecked: true },
  { name: "Kabak", malzeme: "Kabak", isChecked: false },
];

export const pizzaSizes: PizzaSize[] = ["Küçük", "Orta", "Büyük"];

export const errorMessages = {
  isim: "En az 3 karakter içermelidir.",
  malzeme: "Malzeme en az 4 en fazla da 10 adet seçilebilir.",
};