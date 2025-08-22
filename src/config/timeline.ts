/**
 * Timeline Configuration - Clean Version
 * File konfigurasi untuk mengatur timeline dengan mudah
 */

export type TimelineStatus = 'completed' | 'current' | 'upcoming';

export interface TimelineItem {
  id: string;
  phase: string;
  date: string;
  description: string;
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
      phase: 'Recruitment',
      date: '01-30 NOV',
      description: 'Pembukaan pendaftaran untuk semua agen perubahan digital',
      status: 'completed',
      progress: 100,
      details: [
        '150+ pendaftar aktif',
        '20+ institusi pendidikan', 
        'Early bird sold out dalam 2 minggu'
      ]
    },
    {
      id: 'selection',
      phase: 'Selection',
      date: '05 DEC',
      description: 'Pengumuman agen yang lolos seleksi digital',
      status: 'completed',
      progress: 100,
      details: [
        '80 peserta lolos seleksi',
        'Portfolio review oleh 10+ expert',
        'Diversifikasi background peserta'
      ]
    },
    {
      id: 'training',
      phase: 'Training',
      date: '10-20 DEC',
      description: 'Bootcamp intensif dan mentoring dengan master digital',
      status: 'current',
      progress: 60,
      details: [
        'UI/UX Design Fundamentals (Completed)',
        'User Research & Testing (In Progress)',
        'Prototyping with Figma (Upcoming)'
      ]
    },
    {
      id: 'competition',
      phase: 'Competition',
      date: '05-15 JAN',
      description: 'Babak penyisihan dan final battle of interfaces',
      status: 'upcoming',
      progress: 0,
      details: [
        '48-hour design challenge',
        'Real-world case studies',
        'Live judging session'
      ]
    },
    {
      id: 'victory',
      phase: 'Victory',
      date: '20 JAN',
      description: 'Pengumuman pemenang dan penyerahan legacy awards',
      status: 'upcoming',
      progress: 0,
      details: [
        'Award presentation ceremony',
        'Networking with industry leaders',
        'Alumni induction program'
      ]
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