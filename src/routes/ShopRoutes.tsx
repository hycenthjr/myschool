// import type { RouteObject } from "react-router";
import { Route } from "react-router";
import ShopLayout from "../layouts/ShopLayout";
import Dashboard from "../pages/shop/Dashboard";

const ShopRoutes = (
  <Route path="/shop" element={<ShopLayout />}>
    <Route index element={<Dashboard />} />
  </Route>
);

export default ShopRoutes;
