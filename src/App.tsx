import "bootstrap/dist/css/bootstrap.min.css";
import "./components/index.css";
import { useHistory } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { createPizzaOrder } from "./services/pizzaService";
import { useState } from "react";
import type { OrderFormData } from "./types/orderForm";
import type { OrderResponse } from "./types/orderResponse";

function App() {
  const [apiResponse, setApiResponse] = useState<OrderResponse[]>([]);
  let history = useHistory();

  const headers = {
    "x-api-key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  };

  const handleSubmit = (form: OrderFormData, isValid: boolean) => {
    if (isValid) {
      createPizzaOrder(form)
        .then((response) => {
          setApiResponse([response.data]);
          history.push("/success");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <AppRoutes
      onSubmit={handleSubmit}
      apiResponse={apiResponse}
    />
  );
}

export default App;