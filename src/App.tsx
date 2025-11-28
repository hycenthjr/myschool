import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router";

import PublicRoutes from "./routes/PublicRoutes";
import PortalRoutes from "./routes/PortalRoutes";
import ShopRoutes from "./routes/ShopRoutes";
import AuthRoutes from "./routes/AuthRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {PublicRoutes}
      {PortalRoutes}
      {ShopRoutes}
      {AuthRoutes}
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
