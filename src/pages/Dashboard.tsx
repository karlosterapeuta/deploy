import React from 'react';
import { Clock, Users, FileText, TrendingUp, Calendar } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const stats = [
    { label: 'Pacientes Ativos', value: '24', icon: Users, change: '+2 este mês' },
    { label: 'Sessões Hoje', value: '8', icon: Clock, change: '3 pendentes' },
    { label: 'Relatórios Pendentes', value: '3', icon: FileText, change: '-2 desde ontem' },
    { label: 'Taxa de Progresso', value: '87%', icon: TrendingUp, change: '+5% este mês' },
  ];

  const sessionsData = [
    { name: 'Jan', sessions: 65 },
    { name: 'Fev', sessions: 75 },
    { name: 'Mar', sessions: 85 },
    { name: 'Abr', sessions: 78 },
    { name: 'Mai', sessions: 90 },
    { name: 'Jun', sessions: 95 },
  ];

  const patientProgressData = [
    { name: 'Seg', progress: 4 },
    { name: 'Ter', progress: 6 },
    { name: 'Qua', progress: 5 },
    { name: 'Qui', progress: 8 },
    { name: 'Sex', progress: 7 },
  ];

  const patientTypeData = [
    { name: 'Crianças', value: 35 },
    { name: 'Adultos', value: 45 },
    { name: 'Idosos', value: 20 },
  ];

  const COLORS = ['#4F46E5', '#818CF8', '#C7D2FE'];

  const upcomingSessions = [
    { time: '14:00', patient: 'Maria Silva', type: 'Avaliação' },
    { time: '15:30', patient: 'João Santos', type: 'Terapia' },
    { time: '17:00', patient: 'Ana Oliveira', type: 'Reavaliação' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Nova Sessão
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <Calendar className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg">
                <stat.icon className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sessões Realizadas</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sessionsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sessions" stroke="#4F46E5" fill="#C7D2FE" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Progresso Semanal</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={patientProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="progress" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Próximas Sessões</h2>
          <div className="space-y-4">
            {upcomingSessions.map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{session.patient}</p>
                    <p className="text-sm text-gray-500">{session.type}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-900">{session.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Distribuição de Pacientes</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={patientTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {patientTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {patientTypeData.map((entry, index) => (
              <div key={entry.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-gray-600">{entry.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;