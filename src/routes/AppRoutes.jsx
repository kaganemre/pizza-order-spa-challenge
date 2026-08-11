
import { Switch, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import SuccessPage from "../pages/SuccessPage";

export default function AppRoutes({ onSubmit, apiResponse }) {
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