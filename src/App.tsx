import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Processes from './pages/Processes';

function App() {
  // Estado de autenticação
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = (email: string, password: string) => {
    if (email === 'admin@musetera.com' && password === 'admin123') {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Redefinir o estado de autenticação
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} onLogout={handleLogout} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout onLogout={handleLogout} />}>
          <Route index element={<Dashboard />} />
          <Route path="processes" element={<Processes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
