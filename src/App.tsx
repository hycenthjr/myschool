import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router";

import AuthRoutes from "./routes/AuthRoute";
import PublicRoutes from "./routes/PublicRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import PortalRoutes from "./routes/PortalRoutes";
import ShopRoutes from "./routes/ShopRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {AuthRoutes}
      {PublicRoutes}
      {AdminRoutes}
      {PortalRoutes}
      {ShopRoutes}
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
