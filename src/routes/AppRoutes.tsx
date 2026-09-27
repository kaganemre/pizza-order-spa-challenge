import { Switch, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import SuccessPage from "../pages/SuccessPage";
import type { OrderFormProps } from "../types/orderForm";
import type { SuccessProps } from "../types/orderResponse";

type AppRoutesProps = OrderFormProps & SuccessProps;

export default function AppRoutes({ onSubmit, apiResponse }: AppRoutesProps) {
  return (
    <Switch>
      <Route exact path="/">
        <MainLayout>
          <HomePage onSubmit={onSubmit} />
        </MainLayout>
      </Route>

      <Route path="/success">
        <SuccessPage apiResponse={apiResponse} />
      </Route>
    </Switch>
  );
}