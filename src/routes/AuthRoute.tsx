// import type { RouteObject } from "react-router";
import { Route } from "react-router";
import AdminAuthLayout from "../layouts/auth/AdminAuthLayout";
import PortalAuthLayout from "../layouts/auth/PortalAuthLayout";
import { PortalLogin } from "../components/PortalLogin";
import AdminLogin from "../components/AdminLogin";

const AuthRoutes = (
  <>
    {
      /* Admin Auth Layout */
      <Route path="/admin" element={<AdminAuthLayout />}>
        <Route path="login" element={<AdminLogin />} />
      </Route>
    }

    {
      /* Portal Auth Layout */
      <Route path="/portal" element={<PortalAuthLayout />}>
        <Route path=":portalType/login" element={<PortalLogin />} />
      </Route>
    }

    {
      /* Shop Auth Layout */
      // <Route path="/shop" element={<ShopAuthLayout />}>
      //   <Route path="login" element={<ShopLogin />} />
      // </Route>
    }
  </>
);

export default AuthRoutes;
