// import type { RouteObject } from "react-router";
import { Route } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import { PortalLogin } from "../components/PortalLogin";

const AuthRoutes = (
  <Route path="/portal" element={<AuthLayout />}>
    <Route path=":portalType/login" element={<PortalLogin />} />
  </Route>
);

export default AuthRoutes;
