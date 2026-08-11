import OrderForm from "./components/OrderForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/index.css";
import Header from "./components/Header";
import { useHistory } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Success from "./components/Success";
import { createPizzaOrder } from "./services/pizzaService";
import { useState } from "react";

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  let history = useHistory();

  const headers = {
    "x-api-key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  };

  const handleSubmit = (form, isValid) => {
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