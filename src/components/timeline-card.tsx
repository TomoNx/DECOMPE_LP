'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { TimelineItem } from "@/config/timeline";
import { useTranslations } from 'next-intl';

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
}

export default function TimelineCard({ item, index }: TimelineCardProps) {
  const t = useTranslations('timeline');
  const tPhases = useTranslations('timeline.phaseTranslations');
  
  // Translate the item data
  const translatedItem = {
    ...item,
    phase: tPhases(item.phase) || item.phase,
    description: item.description ? (tPhases(item.description) || item.description) : '',
    details: item.details?.map(detail => tPhases(detail) || detail) || []
  };
  const getStatusStyles = () => {
    switch (item.status) {
      case 'completed':
        return {
          border: 'border-green-900/30 hover:border-green-600/50',
          bg: 'bg-black/40',
          icon: 'bg-green-500',
          text: 'text-green-400',
          badge: 'bg-green-600/20 text-green-400 border-green-600/50',
          list: 'bg-green-900/10 border-green-800/30',
          title: 'text-green-400',
          progress: 'bg-green-500',
          statusIcon: <CheckCircle className="w-5 h-5 text-green-400" />
        };
      case 'current':
        return {
          border: 'border-red-900/30 hover:border-red-600/50',
          bg: 'bg-black/40',
          icon: 'bg-red-500',
          text: 'text-red-400',
          badge: 'bg-red-600/20 text-red-400 border-red-600/50 animate-pulse',
          list: 'bg-red-900/10 border-red-800/30',
          title: 'text-red-400',
          progress: 'bg-gradient-to-r from-red-500 to-red-600',
          statusIcon: <AlertCircle className="w-5 h-5 text-red-400 animate-pulse" />
        };
      default:
        return {
          border: 'border-gray-900/30 hover:border-gray-600/50',
          bg: 'bg-black/40',
          icon: 'bg-gray-500',
          text: 'text-gray-500',
          badge: 'bg-gray-600/20 text-gray-400 border-gray-600/50',
          list: 'bg-gray-900/10 border-gray-800/30',
          title: 'text-gray-400',
          progress: 'bg-gray-500',
          statusIcon: <Clock className="w-5 h-5 text-gray-500" />
        };
    }
  };

  const styles = getStatusStyles();
  const isActive = item.status === 'current';

  return (
    <Card className={`p-6 ${styles.bg} ${styles.border} backdrop-blur-sm transition-all duration-300 ${isActive ? 'shadow-lg shadow-red-600/20' : ''} ${item.status === 'upcoming' ? 'opacity-75' : ''}`}>
      <div className="flex items-start space-x-4">
        {/* Status Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-900/20 to-gray-700/20 border border-gray-600/30">
            {styles.statusIcon}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-xl font-bold text-white">{t('phase')} {index + 1}: {translatedItem.phase}</h3>
            <Badge className={`${styles.badge} text-xs font-semibold px-3 py-1`}>
              {item.status === 'completed' ? t('completed') : 
               item.status === 'current' ? t('active') : t('upcoming')}
            </Badge>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <CalendarDays className={`w-4 h-4 ${styles.text}`} />
            <p className={`${styles.text} font-mono text-sm font-medium`}>{translatedItem.date}</p>
          </div>
          
          <p className="text-gray-300 mb-4 leading-relaxed">{translatedItem.description}</p>
          
          {/* Progress for current stage */}
          {item.status === 'current' && (
            <div className="mb-4 p-4 bg-gray-900/20 rounded-lg border border-gray-700/30">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                <span className="font-medium">{t('progress')}</span>
                <span className={`font-bold ${styles.text}`}>{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className={`${styles.progress} h-3 rounded-full transition-all duration-500 shadow-lg`} 
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          )}
          
          {/* Details */}
          {translatedItem.details && translatedItem.details.length > 0 && (
            <div className={`${styles.list} rounded-lg p-4`}>
              <h4 className={`font-semibold ${styles.title} mb-3 text-base flex items-center gap-2`}>
                {item.status === 'current' ? (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    {t('currentActivities')}
                  </>
                ) : item.status === 'completed' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    {t('achievements')}
                  </>
                ) : (
                  <>
                    <Clock className="w-4 h-4" />
                    {t('whatToExpect')}
                  </>
                )}
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                {translatedItem.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <span className={`mr-3 mt-1 w-2 h-2 rounded-full ${styles.icon} flex-shrink-0`}></span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}