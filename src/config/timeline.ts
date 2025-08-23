/**
 * Timeline Configuration - DECOMPE 4.0 Real Timeline
 * Struktur timeline yang sebenarnya untuk DECOMPE 4.0
 */

export type TimelineStatus = 'completed' | 'current' | 'upcoming';
export type TimelinePhase = 'preparation' | 'registration' | 'selection' | 'bootcamp' | 'competition' | 'awarding';

export interface TimelineItem {
  id: string;
  phase: string;
  group: string;
  date: string;
  dateRange: string;
  description?: string;
  status: TimelineStatus;
  progress: number;
  details?: string[];
  milestones?: string[];
}

export interface TimelineGroup {
  id: string;
  name: string;
  period: string;
  description: string;
  color: string;
  items: TimelineItem[];
}

export interface TimelineSettings {
  // Stage yang sedang aktif
  currentStage: string;
  // Progress stage aktif (0-100)
  currentProgress: number;
  // Data timeline
  items: TimelineItem[];
  // Grouped timeline
  groups: TimelineGroup[];
}

// Settings default - Timeline DECOMPE 4.0 yang disederhanakan
export const timelineSettings: TimelineSettings = {
  currentStage: 'pengerjaan_karya', // ← Update ini sesuai progress aktual
  currentProgress: 75,              // ← Update ini: 0-100
  
  items: [
    // FASE 1: PENDAFTARAN
    {
      id: 'pendaftaran',
      phase: 'pendaftaran',
      group: 'pendaftaran',
      date: '01-30 SEP',
      dateRange: '01 - 30 September 2025',
      description: 'pendaftaran_desc',
      status: 'completed',
      progress: 100,
      details: ['pendaftaran_detail1', 'pendaftaran_detail2', 'pendaftaran_detail3'],
      milestones: ['pendaftaran_milestone1', 'pendaftaran_milestone2', 'pendaftaran_milestone3']
    },
    
    // FASE 2: PENGERJAAN KARYA
    {
      id: 'pengerjaan_karya',
      phase: 'pengerjaan_karya',
      group: 'pengerjaan_karya',
      date: '01 SEP - 09 NOV',
      dateRange: '01 September - 09 November 2025',
      description: 'pengerjaan_karya_desc',
      status: 'current',
      progress: 75,
      details: ['pengerjaan_karya_detail1', 'pengerjaan_karya_detail2', 'pengerjaan_karya_detail3'],
      milestones: ['pengerjaan_karya_milestone1', 'pengerjaan_karya_milestone2', 'pengerjaan_karya_milestone3']
    },
    
    // FASE 3: PENJURIAN & PENGUMUMAN
    {
      id: 'penjurian',
      phase: 'penjurian',
      group: 'penjurian',
      date: '10-15 NOV',
      dateRange: '10 - 15 November 2025',
      description: 'penjurian_desc',
      status: 'upcoming',
      progress: 0,
      details: ['penjurian_detail1', 'penjurian_detail2'],
      milestones: ['penjurian_milestone1', 'penjurian_milestone2']
    },
    
    // FASE 4: TAHAP FINAL
    {
      id: 'tahap_final',
      phase: 'tahap_final',
      group: 'tahap_final',
      date: '15-22 NOV',
      dateRange: '15 - 22 November 2025',
      description: 'tahap_final_desc',
      status: 'upcoming',
      progress: 0,
      details: ['tahap_final_detail1', 'tahap_final_detail2', 'tahap_final_detail3'],
      milestones: ['tahap_final_milestone1', 'tahap_final_milestone2', 'tahap_final_milestone3']
    }
  ],
  
  groups: [
    {
      id: 'pendaftaran',
      name: 'pendaftaran',
      period: 'September 2025',
      description: 'pendaftaran_group_desc',
      color: 'green',
      items: []
    },
    {
      id: 'pengerjaan_karya', 
      name: 'pengerjaan_karya',
      period: 'September - November 2025',
      description: 'pengerjaan_karya_group_desc',
      color: 'blue',
      items: []
    },
    {
      id: 'penjurian',
      name: 'penjurian', 
      period: 'November 2025',
      description: 'penjurian_group_desc',
      color: 'yellow',
      items: []
    },
    {
      id: 'tahap_final',
      name: 'tahap_final',
      period: 'November 2025',
      description: 'tahap_final_group_desc', 
      color: 'red',
      items: []
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

// Group timeline items by phase
export function getGroupedTimeline(settings: TimelineSettings): TimelineGroup[] {
  const updatedItems = getUpdatedTimeline(settings);
  
  return settings.groups.map(group => ({
    ...group,
    items: updatedItems.filter(item => item.group === group.id)
  }));
}

// Get current active group
export function getCurrentGroup(settings: TimelineSettings): TimelineGroup | null {
  const currentItem = settings.items.find(item => item.id === settings.currentStage);
  if (!currentItem) return null;
  
  const groups = getGroupedTimeline(settings);
  return groups.find(group => group.id === currentItem.group) || null;
}

// Get timeline summary statistics
export function getTimelineStats(settings: TimelineSettings) {
  const items = getUpdatedTimeline(settings);
  const completed = items.filter(item => item.status === 'completed').length;
  const current = items.filter(item => item.status === 'current').length;
  const upcoming = items.filter(item => item.status === 'upcoming').length;
  
  return {
    total: items.length,
    completed,
    current,
    upcoming,
    completionPercentage: Math.round((completed / items.length) * 100)
  };
}

// Export timeline yang sudah diupdate
export const timelineItems = getUpdatedTimeline(timelineSettings);
export const progressWidth = calculateProgressWidth(timelineSettings);
export const groupedTimeline = getGroupedTimeline(timelineSettings);
export const currentGroup = getCurrentGroup(timelineSettings);
export const timelineStats = getTimelineStats(timelineSettings);