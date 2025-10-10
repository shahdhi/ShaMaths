import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import AboutPage from "./pages/AboutPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";
import { useEffect } from "react";

// Wrapper for course detail to extract route params
function CourseDetailWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <CourseDetailPage courseId={id || ""} onNavigate={(page, pid) => navigate(page === "course-detail" && pid ? `/course/${pid}` : `/${page === "home" ? "" : page}`)} />;
}

function AppContent() {
  const navigate = useNavigate();

  // Helper function to replace old onNavigate logic
  const handleNavigate = (page: string, id?: string) => {
    if (page === "course-detail" && id) navigate(`/course/${id}`);
    else if (page === "home") navigate("/");
    else navigate(`/${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onNavigate={handleNavigate} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
          <Route path="/courses" element={<CoursesPage onNavigate={handleNavigate} />} />
          <Route path="/course/:id" element={<CourseDetailWrapper />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/resources" element={<ResourcesPage onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
          <Route path="/admission" element={<AdmissionPage onNavigate={handleNavigate} />} />
          {/* fallback route */}
          <Route path="*" element={<HomePage onNavigate={handleNavigate} />} />
        </Routes>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
