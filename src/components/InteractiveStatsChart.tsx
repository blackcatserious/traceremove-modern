'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TrendingUp } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface InteractiveStatsChartProps {
  className?: string;
}

export default function InteractiveStatsChart({ className = '' }: InteractiveStatsChartProps) {
  const chartRef = useRef<ChartJS<'line'>>(null);

  const data = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Research Publications',
        data: [2, 4, 7, 10, 13, 15],
        borderColor: 'rgba(124, 58, 237, 1)',
        backgroundColor: 'rgba(124, 58, 237, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(124, 58, 237, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 0.8)',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: 'International Collaborations',
        data: [1, 3, 8, 12, 18, 22],
        borderColor: 'rgba(139, 92, 246, 1)',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(139, 92, 246, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 0.8)',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: 'rgba(255, 255, 255, 0.9)',
        bodyColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'rgba(124, 58, 237, 0.3)',
        borderWidth: 1,
        cornerRadius: 12,
        displayColors: true,
        titleFont: {
          family: 'IBM Plex Sans',
          size: 14,
          weight: 'bold' as const,
        },
        bodyFont: {
          family: 'IBM Plex Sans',
          size: 12,
          weight: 'normal' as const,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(124, 58, 237, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            family: 'IBM Plex Sans',
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(124, 58, 237, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          font: {
            family: 'IBM Plex Sans',
            size: 11,
          },
        },
        beginAtZero: true,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
    elements: {
      point: {
        hoverBackgroundColor: 'rgba(124, 58, 237, 1)',
        hoverBorderColor: 'rgba(255, 255, 255, 1)',
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const gradient1 = ctx.createLinearGradient(0, 0, 0, 300);
      gradient1.addColorStop(0, 'rgba(124, 58, 237, 0.3)');
      gradient1.addColorStop(1, 'rgba(124, 58, 237, 0.05)');

      const gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
      gradient2.addColorStop(0, 'rgba(139, 92, 246, 0.3)');
      gradient2.addColorStop(1, 'rgba(139, 92, 246, 0.05)');

      chart.data.datasets[0].backgroundColor = gradient1;
      chart.data.datasets[1].backgroundColor = gradient2;
      chart.update();
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-accent-ai-purple/20 shadow-2xl hover:shadow-accent-ai-purple/10 transition-all duration-500 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/5 to-accent-lab-purple/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-accent-ai-purple to-accent-lab-purple rounded-xl shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white font-ibm-sans">
              Research Growth
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent-ai-purple rounded-full animate-pulse" />
            <span className="text-sm text-slate-300 font-ibm-sans">Live Data</span>
          </div>
        </div>
        
        <div className="h-64 w-full mb-6">
          <Line ref={chartRef} data={data} options={options} />
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 bg-white/5 rounded-2xl border border-accent-ai-purple/10 hover:border-accent-ai-purple/30 transition-all duration-300"
          >
            <div className="text-3xl font-bold text-accent-ai-purple font-ibm-sans mb-1">15+</div>
            <div className="text-sm text-slate-300 font-ibm-sans">Publications</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 bg-white/5 rounded-2xl border border-accent-lab-purple/10 hover:border-accent-lab-purple/30 transition-all duration-300"
          >
            <div className="text-3xl font-bold text-accent-lab-purple font-ibm-sans mb-1">22+</div>
            <div className="text-sm text-slate-300 font-ibm-sans">Collaborations</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
