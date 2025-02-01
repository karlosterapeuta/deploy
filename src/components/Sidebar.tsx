import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  UserCircle, 
  Users, 
  FileText, 
  Brain, 
  LogOut,
  Music
} from 'lucide-react';

interface SidebarProps {
  onLogout: () => void; // Definindo o tipo para onLogout
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const navigate = useNavigate(); // Hook para navegação
  const menuItems = [
    { icon: Music, label: 'Dashboard', path: '/' },
    { icon: UserCircle, label: 'Profissional', path: '/professional' },
    { icon: Users, label: 'Paciente', path: '/patients' },
    { icon: FileText, label: 'Processos', path: '/processes' },
    { icon: Brain, label: 'Hawkins', path: '/hawkins' },
    { icon: Music, label: 'Músicas', path: '/musics' },
  ];

  const handleLogout = () => {
    onLogout(); // Chamar a função de logout passada como prop
    navigate('/login'); // Redirecionar para a página de login
  };

  return (
    <div className="w-64 bg-indigo-800 text-white p-4">
      <div className="flex items-center gap-3 mb-8">
        <Music className="h-8 w-8" />
        <h1 className="text-2xl font-bold">MuseTera</h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-indigo-700 text-white' 
                  : 'text-indigo-100 hover:bg-indigo-700'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-2 mt-auto w-full text-indigo-100 hover:bg-indigo-700 rounded-lg transition-colors absolute bottom-4"
      >
        <LogOut className="h-5 w-5" />
        <span>Sair</span>
      </button>
    </div>
  );
};

export default Sidebar;
