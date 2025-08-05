'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';

interface MetricData {
  label: string;
  value: number;
  color: string;
  trend?: number;
}

interface ResearchMetricsChartProps {
  title: string;
  data: MetricData[];
  type?: 'bar' | 'line' | 'pie' | 'area';
  className?: string;
}

export default function ResearchMetricsChart({ 
  title, 
  data, 
  type = 'bar', 
  className = '' 
}: ResearchMetricsChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedData, setAnimatedData] = useState<MetricData[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateData();
        }
      },
      { threshold: 0.3 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateData = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const newData = data.map(item => ({
        ...item,
        value: Math.floor(item.value * easeOutQuart)
      }));
      
      setAnimatedData(newData);
      currentStep++;
      
      if (currentStep > steps) {
        clearInterval(interval);
        setAnimatedData(data);
      }
    }, stepDuration);
  };

  const drawChart = () => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible || !animatedData.length) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    if (width <= 0 || height <= 0) return;
    
    ctx.clearRect(0, 0, width, height);

    const padding = 60;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    if (chartWidth <= 0 || chartHeight <= 0) return;

    if (type === 'bar') {
      drawBarChart(ctx, animatedData, padding, chartWidth, chartHeight);
    } else if (type === 'line') {
      drawLineChart(ctx, animatedData, padding, chartWidth, chartHeight);
    } else if (type === 'pie') {
      drawPieChart(ctx, animatedData, width / 2, height / 2, Math.min(chartWidth, chartHeight) / 3);
    }
  };

  const drawBarChart = (ctx: CanvasRenderingContext2D, data: MetricData[], padding: number, chartWidth: number, chartHeight: number) => {
    if (!data.length || chartWidth <= 0 || chartHeight <= 0) return;
    
    const maxValue = Math.max(...data.map(d => d.value));
    if (maxValue <= 0) return;
    
    const barWidth = chartWidth / data.length * 0.8;
    const barSpacing = chartWidth / data.length * 0.2;

    data.forEach((item, index) => {
      const barHeight = (item.value / maxValue) * chartHeight;
      const x = padding + index * (barWidth + barSpacing) + barSpacing / 2;
      const y = padding + chartHeight - barHeight;

      if (!isFinite(x) || !isFinite(y) || !isFinite(barWidth) || !isFinite(barHeight)) return;

      const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
      gradient.addColorStop(0, item.color);
      gradient.addColorStop(1, item.color + '40');

      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, barHeight);

      ctx.shadowColor = item.color;
      ctx.shadowBlur = 10;
      ctx.fillRect(x, y, barWidth, barHeight);
      ctx.shadowBlur = 0;

      ctx.fillStyle = '#374151';
      ctx.font = '12px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(item.label, x + barWidth / 2, padding + chartHeight + 20);
      
      ctx.fillStyle = '#6B7280';
      ctx.font = 'bold 14px Inter';
      ctx.fillText(item.value.toString(), x + barWidth / 2, y - 10);
    });
  };

  const drawLineChart = (ctx: CanvasRenderingContext2D, data: MetricData[], padding: number, chartWidth: number, chartHeight: number) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const stepX = chartWidth / (data.length - 1);

    ctx.strokeStyle = '#6366F1';
    ctx.lineWidth = 3;
    ctx.beginPath();

    data.forEach((item, index) => {
      const x = padding + index * stepX;
      const y = padding + chartHeight - (item.value / maxValue) * chartHeight;

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      ctx.fillStyle = item.color;
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.stroke();
  };

  const drawPieChart = (ctx: CanvasRenderingContext2D, data: MetricData[], centerX: number, centerY: number, radius: number) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = -Math.PI / 2;

    data.forEach((item) => {
      const sliceAngle = (item.value / total) * Math.PI * 2;

      ctx.fillStyle = item.color;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fill();

      ctx.shadowColor = item.color;
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      currentAngle += sliceAngle;
    });
  };

  useEffect(() => {
    drawChart();
  }, [animatedData, isVisible]);

  const getIcon = () => {
    switch (type) {
      case 'bar': return BarChart3;
      case 'line': return TrendingUp;
      case 'pie': return PieChart;
      default: return Activity;
    }
  };

  const Icon = getIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`group ${className}`}
    >
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-ai-purple/10 to-accent-lab-purple/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        
        <div className="relative glass-card-premium p-8 transition-all duration-700 hover:shadow-card-hover">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-ai-purple to-accent-lab-purple rounded-2xl flex items-center justify-center mr-4 shadow-ai-glow group-hover:shadow-hero-glow transition-all duration-300">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-accent-deep-blue font-ibm-sans">
                {title}
              </h3>
            </div>
          </div>

          {/* Chart Canvas */}
          <div className="relative mb-6">
            <canvas
              ref={canvasRef}
              width={400}
              height={300}
              className="w-full h-auto max-w-full"
              style={{ maxHeight: '300px' }}
            />
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-4">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div 
                  className="w-4 h-4 rounded-full mr-3 shadow-sm"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-accent-deep-blue font-ibm-sans">
                    {item.label}
                  </div>
                  <div className="text-lg font-bold text-accent-ai-purple">
                    {animatedData.find(d => d.label === item.label)?.value || 0}
                    {item.trend && (
                      <span className={`ml-2 text-xs ${item.trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {item.trend > 0 ? '+' : ''}{item.trend}%
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hover Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-ai-purple via-accent-lab-purple to-accent-ai-purple opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
               style={{ padding: '1px' }}>
            <div className="w-full h-full bg-white rounded-3xl" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
