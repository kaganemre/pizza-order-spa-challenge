import axios from "axios";

const API_URL = "https://reqres.in/api/pizza";

const headers = {
  "x-api-key": "YOUR_API_KEY",
  "Content-Type": "application/json"
};

export function createPizzaOrder(order) {
  return axios.post(API_URL, order, { headers });
}