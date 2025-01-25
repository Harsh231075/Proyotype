import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
// import { StudentPortal } from './pages/StudentPortal';
import { CollegePortal } from './pages/CollegePortal';
import { CompanyPortal } from './pages/CompanyPortal';
import { AuthProvider, useAuth } from './context/AuthContext';
import { About } from './components/About';
import { SignupLogin } from './components/SignupLogin';
import { Dashboard } from './dashboard/Dashboard'
import { NotImplementedPage } from './pages/NotImplementedPage';
import CompanyAuthPage from './components/CompanyAuthPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './pages/ContactPage';
import Header from './Students/Header';
function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: string[] }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function AppRoutes() {
  const location = useLocation();

  // Define routes where the Navbar and Footer should be hidden
  const hideNavbarFooter = ['/dashboard', '/not-implemented', '/students'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900">
      {/* Conditionally render Navigation */}
      {!hideNavbarFooter && <Navigation />}

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Features />
              <About />
              <Testimonials />
            </main>
          }
        />
        <Route path='/students' element={<Header />} />
        <Route path='/company' element={<CompanyAuthPage />} />
        <Route path="/not-implemented" element={<NotImplementedPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<SignupLogin />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route
          path="/colleges"
          element={
            <ProtectedRoute allowedRoles={['college']}>
              <CollegePortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/companies"
          element={
            <ProtectedRoute allowedRoles={['company']}>
              <CompanyPortal />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Conditionally render Footer */}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}


function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;