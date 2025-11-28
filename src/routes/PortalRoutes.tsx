// import type { RouteObject } from "react-router";
import { Route } from "react-router";
import PortalLayout from "../layouts/PortalLayout";
// import { ProtectedRoute } from "../components/ProtectedRoute";
import { ParentPortal } from "../pages/portals/ParentPortal";
import { StudentPortal } from "../pages/portals/StudentPortal";
import { StaffPortal } from "../pages/portals/StaffPortal";
import { AdminPortal } from "../pages/portals/AdminPortal";
import { NursePortal } from "../pages/portals/NursePortal";
import { CoachPortal } from "../pages/portals/CoachPortal";
import { TransportPortal } from "../pages/portals/TransportPortal";
import { VendorPortal } from "../pages/portals/VendorPortal";

const portalRoutes = (
  <Route path="/portal" element={<PortalLayout />}>
    <Route path="parent" element={<ParentPortal />} />
    <Route path="student" element={<StudentPortal />} />
    <Route path="staff" element={<StaffPortal />} />
    <Route path="admin" element={<AdminPortal />} />
    <Route path="nurse" element={<NursePortal />} />
    <Route path="coach" element={<CoachPortal />} />
    <Route path="transport" element={<TransportPortal />} />
    <Route path="vendor" element={<VendorPortal />} />
  </Route>
);

export default portalRoutes;