import React from 'react';
import { 
  ClipboardList, 
  FileSpreadsheet, 
  FileText, 
  Activity, 
  RefreshCw, 
  FileOutput 
} from 'lucide-react';

const ProcessButton = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <button className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 hover:bg-indigo-50 transition-colors">
    <Icon className="h-12 w-12 text-indigo-600 mb-4" />
    <span className="text-gray-900 font-medium text-lg">{label}</span>
  </button>
);

const Processes = () => {
  const processes = [
    { icon: ClipboardList, label: 'Anamnese' },
    { icon: FileSpreadsheet, label: 'Avaliação' },
    { icon: FileText, label: 'Plano Terapêutico' },
    { icon: Activity, label: 'Intervenção' },
    { icon: RefreshCw, label: 'Reavaliação' },
    { icon: FileOutput, label: 'Relatório' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Processos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processes.map((process) => (
          <ProcessButton 
            key={process.label} 
            icon={process.icon} 
            label={process.label} 
          />
        ))}
      </div>
    </div>
  );
};

export default Processes;