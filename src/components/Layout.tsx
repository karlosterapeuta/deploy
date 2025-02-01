import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  onLogout: () => void; // Adicionando a propriedade onLogout
}

const Layout = ({ onLogout }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onLogout={onLogout} /> {/* Passando a função onLogout para o Sidebar */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
