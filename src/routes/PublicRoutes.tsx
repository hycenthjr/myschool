import { Route } from "react-router";
import PublicLayout from "../layouts/PublicLayout";
import { HomePage } from "../pages/landing/HomePage";
import { AboutPage } from "../pages/landing/AboutPage";
import { AcademicsPage } from "../pages/landing/AcademicsPage";
import { SportsPage } from "../pages/landing/SportsPage";
import { EntrepreneurshipPage } from "../pages/landing/EntrepreneurshipPage";
import { BoardingPage } from "../pages/landing/BoardingPage";
import { AdmissionsPage } from "../pages/landing/AdmissionsPage";
import { VirtualTourPage } from "../pages/landing/VirtualTourPage";
import { NewsEventsPage } from "../pages/landing/NewsEventsPage";
import { NewsDetailPage } from "../pages/landing/NewsDetailPage";
import { AlumniPage } from "../pages/landing/AlumniPage";
import { SustainabilityPage } from "../pages/landing/SustainabilityPage";
import { ContactPage } from "../pages/landing/ContactPage";
import { DiagnosticsPage } from "../pages/landing/DiagnosticsPage";
import { DonatePage } from "../pages/landing/DonatePage";

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
