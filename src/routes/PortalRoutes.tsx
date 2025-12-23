import { Route } from "react-router";
import PortalLayout from "../layouts/PortalLayout";
// import { ProtectedRoute } from "../components/ProtectedRoute";
import { StudentPortal } from "../pages/portals/StudentPortal";
import { ParentPortal } from "../pages/portals/ParentPortal";

const portalRoutes = (
  <Route path="/portal" element={<PortalLayout />}>
    <Route path="student" element={<StudentPortal />} />
    <Route path="parent" element={<ParentPortal />} />
  </Route>
);

export default portalRoutes;