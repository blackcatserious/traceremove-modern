'use client';

import { useEffect, useRef, useCallback } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface InteractiveChartProps {
  dataFile: string;
  chartType: 'bar' | 'line' | 'doughnut';
  title: string;
  className?: string;
}

export default function InteractiveChart({ dataFile, chartType, title, className = '' }: InteractiveChartProps) {
  const chartRef = useRef(null);

  const getChartData = useCallback((data: unknown) => {
    if (dataFile.includes('workflow_metrics')) {
      const metrics = Array.isArray(data) ? data[0] : null;
      if (!metrics) return getDefaultChartData();
      return {
        labels: ['Simple Tasks', 'Complex Tasks', 'Multi-step Tasks'],
        datasets: [
          {
            label: 'Success Rate',
            data: [metrics.simple_tasks, metrics.complex_tasks, metrics.multi_step_tasks],
            backgroundColor: [
              'rgba(108, 99, 255, 0.8)',
              'rgba(112, 86, 230, 0.8)',
              'rgba(40, 42, 54, 0.8)',
            ],
            borderColor: [
              'rgba(108, 99, 255, 1)',
              'rgba(112, 86, 230, 1)',
              'rgba(40, 42, 54, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };
    }

    if (dataFile.includes('privacy_metrics')) {
      return {
        labels: ['Encryption Overhead', 'Query Latency', 'Privacy Score', 'Accuracy'],
        datasets: [
          {
            label: 'Performance Metrics',
            data: [0.15, 0.23, 0.95, 0.87],
            backgroundColor: 'rgba(108, 99, 255, 0.8)',
            borderColor: 'rgba(108, 99, 255, 1)',
            borderWidth: 2,
            fill: true,
          },
        ],
      };
    }

    if (dataFile.includes('budget_tiers')) {
      return {
        labels: ['Starter', 'Research', 'Enterprise'],
        datasets: [
          {
            label: 'Monthly Cost ($)',
            data: [500, 2000, 8000],
            backgroundColor: [
              'rgba(16, 185, 129, 0.8)',
              'rgba(108, 99, 255, 0.8)',
              'rgba(112, 86, 230, 0.8)',
            ],
            borderColor: [
              'rgba(16, 185, 129, 1)',
              'rgba(108, 99, 255, 1)',
              'rgba(112, 86, 230, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };
    }

    return getDefaultChartData();
  }, [dataFile]);

  const getDefaultChartData = () => ({
    labels: ['Data 1', 'Data 2', 'Data 3'],
    datasets: [
      {
        label: 'Sample Data',
        data: [65, 59, 80],
        backgroundColor: 'rgba(108, 99, 255, 0.8)',
        borderColor: 'rgba(108, 99, 255, 1)',
        borderWidth: 2,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#282A36',
        },
      },
      title: {
        display: true,
        text: title,
        color: '#282A36',
      },
      tooltip: {
        backgroundColor: 'rgba(40, 42, 54, 0.95)',
        titleColor: '#F8FAFC',
        bodyColor: '#F8FAFC',
        borderColor: 'rgba(108, 99, 255, 0.6)',
        borderWidth: 2,
        cornerRadius: 12,
        padding: 12,
        displayColors: true,
        usePointStyle: true,
      },
    },
    scales: chartType !== 'doughnut' ? {
      x: {
        grid: {
          color: 'rgba(156, 163, 175, 0.2)',
        },
        ticks: {
          color: '#64748B',
        },
      },
      y: {
        grid: {
          color: 'rgba(156, 163, 175, 0.2)',
        },
        ticks: {
          color: '#64748B',
        },
      },
    } : undefined,
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`/data/${dataFile}`);
        const data = await response.json();
        
        if (chartRef.current) {
          getChartData(data);
        }
      } catch (error) {
        console.error('Error loading chart data:', error);
      }
    };

    loadData();
  }, [dataFile, getChartData]);

  const sampleData = getChartData([{
    simple_tasks: 0.94,
    complex_tasks: 0.78,
    multi_step_tasks: 0.65
  }]);

  const ChartComponent = chartType === 'bar' ? Bar : chartType === 'line' ? Line : Doughnut;

  return (
    <div className={`relative group ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-white via-research-50/20 to-accent-ai-purple/5 rounded-3xl shadow-lab-card hover:shadow-card-hover border border-accent-ai-purple/10 hover:border-accent-ai-purple/30 p-8 transition-all duration-500 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-ai-purple/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-lab-purple/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative h-80">
          <ChartComponent ref={chartRef} data={sampleData} options={chartOptions} />
        </div>
        
        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
             style={{ padding: '1px' }}>
          <div className="w-full h-full bg-white rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
