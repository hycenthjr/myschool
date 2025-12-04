import { Route } from "react-router";
import PublicLayout from "../layouts/PublicLayout";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { AcademicsPage } from "../pages/AcademicsPage";
import { SportsPage } from "../pages/SportsPage";
import { EntrepreneurshipPage } from "../pages/EntrepreneurshipPage";
import { BoardingPage } from "../pages/BoardingPage";
import { AdmissionsPage } from "../pages/AdmissionsPage";
import { VirtualTourPage } from "../pages/VirtualTourPage";
import { NewsEventsPage } from "../pages/NewsEventsPage";
import { NewsDetailPage } from "../pages/NewsDetailPage";
import { AlumniPage } from "../pages/AlumniPage";
import { SustainabilityPage } from "../pages/SustainabilityPage";
import { ContactPage } from "../pages/ContactPage";
import { DiagnosticsPage } from "../pages/DiagnosticsPage";
import { DonatePage } from "../pages/DonatePage";

const publicRoutes = (
  <Route path="/" element={<PublicLayout />}>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="academics" element={<AcademicsPage />} />
    <Route path="sports" element={<SportsPage />} />
    <Route path="entrepreneurship" element={<EntrepreneurshipPage />} />
    <Route path="boarding-life" element={<BoardingPage />} />
    <Route path="admissions" element={<AdmissionsPage />} />
    <Route path="virtual-tour" element={<VirtualTourPage />} />
    <Route path="news-events" element={<NewsEventsPage />} />
    <Route path="news/:slug" element={<NewsDetailPage />} />
    <Route path="alumni" element={<AlumniPage />} />
    <Route path="sustainability" element={<SustainabilityPage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="diagnostics" element={<DiagnosticsPage />} />
    <Route path="donate" element={<DonatePage />} />
  </Route>
);

export default publicRoutes;