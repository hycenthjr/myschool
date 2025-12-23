// import type { RouteObject } from "react-router";
import { Route } from "react-router";
// import { ProtectedRoute } from "../components/ProtectedRoute";
// import { useAuth } from "../contexts/AuthContext";
import AdminLayout from "../layouts/AdminLayout";

// Admin Imports
import AdminDashboard from "../pages/admin/AdminDashboard";
import Staffs from "../pages/admin/management/Staffs";
import Students from "../pages/admin/management/Students";
import ManageClasses from "../pages/admin/ManageClasses";
import AcademicReport from "../pages/admin/AcademicReport";
import Finance from "../pages/admin/Finance";
import Analytics from "../pages/admin/Analytics";
import GeneralSetting from "../pages/admin/settings/GeneralSetting";
import FrontendSetting from "../pages/admin/settings/FrontendSetting";

// Staff Imports
import StaffDashboard from "../pages/admin/staff/staffDashboard";
import Attendance from "../pages/admin/staff/Attendance";
import Classes from "../pages/admin/staff/Classes";
import Grade from "../pages/admin/staff/Grade";
import Messages from "../pages/admin/staff/Messages";
import Reports from "../pages/admin/staff/Reports";

// Nurse Imports
import NurseDashboard from "../pages/admin/nurse/NurseDashboard";
import Appointment from "../pages/admin/nurse/Appointment";
import Emergency from "../pages/admin/nurse/Emergency";
import Inventory from "../pages/admin/nurse/Inventory";
import Records from "../pages/admin/nurse/Records";

// Coach Imports
import CoachDashboard from "../pages/admin/coach/CoachDashboard";
import Competitions from "../pages/admin/coach/Competitions";
import Performance from "../pages/admin/coach/Performance";
import Roster from "../pages/admin/coach/Roster";
import Schedule from "../pages/admin/coach/Schedule";
import Training from "../pages/admin/coach/Training";

// Transport Imports
import TransportDashboard from "../pages/admin/transport/TransportDashboard";
import BusRoutes from "../pages/admin/transport/BusRoutes";
import Fleet from "../pages/admin/transport/Fleet";
import LiveMap from "../pages/admin/transport/LiveMap";
import Maintenance from "../pages/admin/transport/Maintenance";
import TransportSchedule from "../pages/admin/transport/TransportSchedule";

// Vendor Imports
import VendorDashboard from "../pages/admin/vendor/VendorDashboard";
import Order from "../pages/admin/vendor/Order";
import Product from "../pages/admin/vendor/Product";
import Sales from "../pages/admin/vendor/Sales";
import VendorMessages from "../pages/admin/vendor/VendorMessages";
import VendorReports from "../pages/admin/vendor/VendorReports";

// function DashboardByRole() {
//   const { user } = useAuth();
//   if (!user) return <div>Loading...</div>;
//   switch (user.role) {
//     case "vendor":
//       return <VendorDashboard />;
//     case "admin":
//       return <AdminDashboard />;
//     // Add more roles and dashboards as needed
//     default:
//       return <div>Unauthorized or unknown role.</div>;
//   }
// }

const adminRoutes = (
  <Route path="/admin" element={<AdminLayout />}>
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="staffs" element={<Staffs />} />
    <Route path="students" element={<Students />} />
    <Route path="manage-classes" element={<ManageClasses />} />
    <Route path="academic-report" element={<AcademicReport />} />
    <Route path="finance" element={<Finance />} />
    <Route path="analytics" element={<Analytics />} />
    <Route path="settings">
      <Route path="general" element={<GeneralSetting />} />
      <Route path="frontend" element={<FrontendSetting />} />
    </Route>

    {/* Staff Routes */}
    <Route path="staff">
      <Route path="dashboard" element={<StaffDashboard />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="classes" element={<Classes />} />
      <Route path="grade" element={<Grade />} />
      <Route path="messages" element={<Messages />} />
      <Route path="reports" element={<Reports />} />
    </Route>

    {/* Nurse Routes */}
    <Route path="nurse">
      <Route path="dashboard" element={<NurseDashboard />} />
      <Route path="appointment" element={<Appointment />} />
      <Route path="emergency" element={<Emergency />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="records" element={<Records />} />
    </Route>

    {/* Coach Routes */}
    <Route path="coach">
      <Route path="dashboard" element={<CoachDashboard />} />
      <Route path="competitions" element={<Competitions />} />
      <Route path="performance" element={<Performance />} />
      <Route path="roster" element={<Roster />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="training" element={<Training />} />
    </Route>

    {/* Transport Routes */}
    <Route path="transport">
      <Route path="dashboard" element={<TransportDashboard />} />
      <Route path="routes" element={<BusRoutes />} />
      <Route path="fleet" element={<Fleet />} />
      <Route path="live" element={<LiveMap />} />
      <Route path="maintenance" element={<Maintenance />} />
      <Route path="schedule" element={<TransportSchedule />} />
      <Route path="training" element={<Training />} />
    </Route>

    {/* Vendor Routes */}
    <Route path="vendor">
      <Route path="dashboard" element={<VendorDashboard/>} />
      <Route path="order" element={<Order />} />
      <Route path="product" element={<Product />} />
      <Route path="sales" element={<Sales />} />
      <Route path="messages" element={<VendorMessages />} />
      <Route path="reports" element={<VendorReports />} />
    </Route>
  </Route>
);

export default adminRoutes;
