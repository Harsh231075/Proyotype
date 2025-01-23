import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { StudentPortal } from './pages/StudentPortal';
import { CollegePortal } from './pages/CollegePortal';
import { CompanyPortal } from './pages/CompanyPortal';
import { LoginForm } from './components/LoginForm';
import { AuthProvider, useAuth } from './context/AuthContext';

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
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900">
      <Navigation />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <Features />
            <Testimonials />
          </main>
        } />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/students" element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentPortal />
          </ProtectedRoute>
        } />
        <Route path="/colleges" element={
          <ProtectedRoute allowedRoles={['college']}>
            <CollegePortal />
          </ProtectedRoute>
        } />
        <Route path="/companies" element={
          <ProtectedRoute allowedRoles={['company']}>
            <CompanyPortal />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer />
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