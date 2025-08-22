'use client';

import { timelineItems, progressWidth } from '@/config/timeline';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function Timeline() {
  return (
    <div className="max-w-6xl mx-auto mb-16 px-4">
      {/* Progress Bar - Desktop */}
      <div className="hidden md:block relative mb-16">
        {/* Progress Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Project Progress</h2>
          <p className="text-gray-400">Track our journey through each phase of the competition</p>
        </div>
        
        {/* Main Progress Container */}
        <div className="relative h-24">
          {/* Background Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full transform -translate-y-1/2"></div>
          
          {/* Active Progress Line */}
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-green-500 via-red-500 to-red-600 rounded-full transition-all duration-1000 shadow-lg transform -translate-y-1/2"
            style={{ width: `${progressWidth}%` }}
          ></div>
          
          {/* Timeline Points */}
          <div className="relative flex justify-between h-full">
            {timelineItems.map((item, index) => (
              <TimelinePoint key={item.id} item={item} index={index} totalItems={timelineItems.length} />
            ))}
          </div>
        </div>
      </div>

      {/* Timeline - Mobile (Vertical) */}
      <div className="md:hidden space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-white mb-2">Project Progress</h2>
          <p className="text-gray-400 text-sm">Track our journey through each phase</p>
        </div>
        {timelineItems.map((item, index) => (
          <MobileTimelineItem key={item.id} item={item} index={index} totalItems={timelineItems.length} />
        ))}
      </div>
    </div>
  );
}

interface TimelinePointProps {
  item: {
    id: string;
    phase: string;
    date: string;
    status: 'completed' | 'current' | 'upcoming';
    progress: number;
  };
  index: number;
  totalItems: number;
}

function TimelinePoint({ item, index, totalItems }: TimelinePointProps) {
  const getStatusStyles = () => {
    switch (item.status) {
      case 'completed':
        return {
          point: 'bg-green-500 border-green-400 shadow-lg shadow-green-500/30',
          text: 'text-green-400',
          dot: 'bg-white',
          card: 'border-green-900/30 bg-green-900/10',
          icon: <CheckCircle className="w-5 h-5 text-green-400" />
        };
      case 'current':
        return {
          point: 'bg-red-600 border-red-400 shadow-lg shadow-red-600/30 animate-pulse',
          text: 'text-red-400',
          dot: 'bg-white animate-ping',
          card: 'border-red-900/30',
          icon: <AlertCircle className="w-5 h-5 text-red-400 animate-pulse" />
        };
      default:
        return {
          point: 'bg-gray-700 border-gray-600',
          text: 'text-gray-500',
          dot: '',
          card: 'border-gray-900/30 bg-gray-900/10',
          icon: <Clock className="w-5 h-5 text-gray-500" />
        };
    }
  };

  const styles = getStatusStyles();
  const isActive = item.status === 'current';

  return (
    <div className="flex flex-col items-center group h-full">
      {/* Timeline Point */}
      <div className="relative flex flex-col items-center justify-start pt-2 z-20">
        <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${styles.point} ${isActive ? 'scale-110' : ''}`}>
          {item.status !== 'upcoming' && (
            <div className={`w-3 h-3 rounded-full ${styles.dot}`}></div>
          )}
        </div>
        
        {/* Status Card */}
        <div className={`absolute top-12 left-1/2 transform -translate-x-1/2 w-48 p-3 rounded-lg border backdrop-blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none z-50 ${styles.card}`}>
          <div className="flex items-center gap-2 mb-2">
            {styles.icon}
            <span className={`text-xs font-bold ${styles.text}`}>
              {item.status === 'completed' ? 'COMPLETED' : 
               item.status === 'current' ? 'IN PROGRESS' : 'UPCOMING'}
            </span>
          </div>
          <div className="text-xs text-gray-300">
            {item.phase}
          </div>
          <div className="text-xs text-gray-400 font-mono mt-1">
            {item.date}
          </div>
          {item.status === 'current' && (
            <div className="mt-2">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span>{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1">
                <div 
                  className="bg-gradient-to-r from-red-500 to-red-600 h-1 rounded-full transition-all duration-500" 
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Label */}
      <div className="mt-4 text-center max-w-[120px] relative z-10">
        <div className={`text-sm font-bold mb-1 ${styles.text} ${isActive ? 'animate-pulse' : ''}`}>
          {item.phase}
        </div>
        <div className="text-xs text-gray-400 font-mono">
          {item.date}
        </div>
        {isActive && (
          <div className="mt-1 text-xs text-red-400 font-semibold animate-pulse">
            ACTIVE
          </div>
        )}
      </div>
    </div>
  );
}

interface MobileTimelineItemProps {
  item: {
    id: string;
    phase: string;
    date: string;
    status: 'completed' | 'current' | 'upcoming';
    progress: number;
    description: string;
  };
  index: number;
  totalItems: number;
}

function MobileTimelineItem({ item, index, totalItems }: MobileTimelineItemProps) {
  const getStatusStyles = () => {
    switch (item.status) {
      case 'completed':
        return {
          point: 'bg-green-500 border-green-400',
          line: 'bg-green-500',
          text: 'text-green-400',
          badge: 'bg-green-600/20 text-green-400 border-green-600/50',
          card: 'border-green-900/30 bg-green-900/10',
          icon: <CheckCircle className="w-5 h-5 text-green-400" />
        };
      case 'current':
        return {
          point: 'bg-red-600 border-red-400 animate-pulse',
          line: 'bg-red-500',
          text: 'text-red-400',
          badge: 'bg-red-600/20 text-red-400 border-red-600/50 animate-pulse',
          card: 'border-red-900/30 bg-red-900/10',
          icon: <AlertCircle className="w-5 h-5 text-red-400 animate-pulse" />
        };
      default:
        return {
          point: 'bg-gray-700 border-gray-600',
          line: 'bg-gray-500',
          text: 'text-gray-500',
          badge: 'bg-gray-600/20 text-gray-400 border-gray-600/50',
          card: 'border-gray-900/30 bg-gray-900/10',
          icon: <Clock className="w-5 h-5 text-gray-500" />
        };
    }
  };

  const styles = getStatusStyles();
  const isLast = index === totalItems - 1;
  const isActive = item.status === 'current';

  return (
    <div className="relative">
      {/* Timeline Card */}
      <div className={`p-4 rounded-lg border backdrop-blur-sm transition-all duration-300 ${styles.card} ${isActive ? 'shadow-lg' : ''}`}>
        <div className="flex items-start space-x-4">
          {/* Timeline Line */}
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${styles.point} ${isActive ? 'scale-110' : ''}`}>
              {item.status !== 'upcoming' && (
                <div className="w-3 h-3 bg-white rounded-full"></div>
              )}
            </div>
            {!isLast && (
              <div className={`w-0.5 h-16 mt-3 ${styles.line}`}></div>
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-2">
                {styles.icon}
                <h3 className={`text-base font-bold ${styles.text}`}>
                  Phase {index + 1}: {item.phase}
                </h3>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full border ${styles.badge}`}>
                {item.status === 'completed' ? 'COMPLETED' : 
                 item.status === 'current' ? 'ACTIVE' : 'UPCOMING'}
              </span>
            </div>
            
            <div className={`text-sm mb-2 font-mono ${styles.text}`}>
              {item.date}
            </div>
            
            <p className="text-sm text-gray-300 mb-3 leading-relaxed">
              {item.description}
            </p>
            
            {/* Progress for current stage */}
            {item.status === 'current' && (
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span>Progress</span>
                  <span className="font-semibold">{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-500 shadow-lg" 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            {/* Details */}
            {item.details && (
              <div className="mt-3">
                <h4 className={`font-semibold ${styles.text} mb-2 text-sm`}>
                  {item.status === 'current' ? 'Current Activities:' : 
                   item.status === 'completed' ? 'Achievements:' : 'What to Expect:'}
                </h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}