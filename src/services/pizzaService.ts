import axios from "axios";
import type { OrderFormData } from "../types/orderForm";

const API_URL = "https://reqres.in/api/pizza";

const headers = {
  "x-api-key": "YOUR_API_KEY",
  "Content-Type": "application/json"
};

export function createPizzaOrder(order: OrderFormData) {
  return axios.post(API_URL, order, { headers });
}