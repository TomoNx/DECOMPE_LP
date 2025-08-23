/**
 * Timeline Configuration - Clean Version
 * File konfigurasi untuk mengatur timeline dengan mudah
 */

export type TimelineStatus = 'completed' | 'current' | 'upcoming';

export interface TimelineItem {
  id: string;
  phase: string;
  date: string;
  description?: string;
  status: TimelineStatus;
  progress: number;
  details?: string[];
}

export interface TimelineSettings {
  // Stage yang sedang aktif
  currentStage: string;
  // Progress stage aktif (0-100)
  currentProgress: number;
  // Data timeline
  items: TimelineItem[];
}

// Settings default - admin bisa ubah bagian ini
export const timelineSettings: TimelineSettings = {
  currentStage: 'training', // ← Ganti ini: 'recruitment' | 'selection' | 'training' | 'competition' | 'victory'
  currentProgress: 60,     // ← Ganti ini: 0-100
  
  items: [
    {
      id: 'recruitment',
      phase: 'recruitment', // This will be used as translation key
      date: '01-30 NOV',
      description: 'recruitment_desc',
      status: 'completed',
      progress: 100,
      details: ['recruitment_detail1', 'recruitment_detail2', 'recruitment_detail3']
    },
    {
      id: 'selection',
      phase: 'selection',
      date: '05 DEC',
      description: 'selection_desc',
      status: 'completed',
      progress: 100,
      details: ['selection_detail1', 'selection_detail2', 'selection_detail3']
    },
    {
      id: 'training',
      phase: 'training',
      date: '10-20 DEC',
      description: 'training_desc',
      status: 'current',
      progress: 60,
      details: ['training_detail1', 'training_detail2', 'training_detail3']
    },
    {
      id: 'competition',
      phase: 'competition',
      date: '05-15 JAN',
      description: 'competition_desc',
      status: 'upcoming',
      progress: 0,
      details: ['competition_detail1', 'competition_detail2', 'competition_detail3']
    },
    {
      id: 'victory',
      phase: 'victory',
      date: '20 JAN',
      description: 'victory_desc',
      status: 'upcoming',
      progress: 0,
      details: ['victory_detail1', 'victory_detail2', 'victory_detail3']
    }
  ]
};

// Update timeline status otomatis
export function getUpdatedTimeline(settings: TimelineSettings): TimelineItem[] {
  const currentIndex = settings.items.findIndex(item => item.id === settings.currentStage);
  
  return settings.items.map((item, index) => {
    if (index < currentIndex) {
      return { ...item, status: 'completed' as TimelineStatus, progress: 100 };
    } else if (index === currentIndex) {
      return { ...item, status: 'current' as TimelineStatus, progress: settings.currentProgress };
    } else {
      return { ...item, status: 'upcoming' as TimelineStatus, progress: 0 };
    }
  });
}

// Hitung progress bar width
export function calculateProgressWidth(settings: TimelineSettings): number {
  const currentIndex = settings.items.findIndex(item => item.id === settings.currentStage);
  const progress = settings.currentProgress / 100;
  return ((currentIndex + progress) / settings.items.length) * 100;
}

// Export timeline yang sudah diupdate
export const timelineItems = getUpdatedTimeline(timelineSettings);
export const progressWidth = calculateProgressWidth(timelineSettings);