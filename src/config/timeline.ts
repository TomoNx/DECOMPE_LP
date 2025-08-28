/**
 * Timeline Configuration - DECOMPE 4.0 Real Timeline
 * Struktur timeline yang sebenarnya untuk DECOMPE 4.0
 * 
 * STATUS SAAT INI: TIMELINE 5 FASE ✅
 * =====================================
 * 
 * Konfigurasi ini menunjukkan timeline DECOMPE 4.0 yang lengkap 
 * dengan 5 fase termasuk bootcamp. Timeline akan otomatis menampilkan
 * status 'completed' ketika tahap final mencapai 100% progress.
 * 
 * FASE-FASE TIMELINE:
 * ===================
 * 1. 📝 PENDAFTARAN (01-30 September 2025)
 * 2. 🎓 BOOTCAMP (25 Oktober - 08 November 2025)
 * 3. 💻 PENGERJAAN KARYA (09 November - 15 Desember 2025)
 * 4. ⚖️ PENJURIAN & PENGUMUMAN (16-25 Desember 2025)
 * 5. 🏆 TAHAP FINAL (26 Desember 2025 - 02 Januari 2026)
 * 
 * FITUR AUTO-COMPLETION:
 * ======================
 * 
 * Timeline akan otomatis mendeteksi ketika semua fase telah selesai:
 * - Jika currentStage = 'tahap_final' DAN currentProgress = 100%
 * - Maka SEMUA fase akan ditampilkan dengan status 'completed'
 * - Progress bar akan mencapai 100% penuh
 * - Tidak ada fase yang menampilkan status 'current' atau 'upcoming'
 * 
 * CARA MENGATUR PROGRESS BAR:
 * =============================
 * 
 * 1. Untuk membuat progress bar mencapai titik tertentu:
 *    - currentStage: set ke ID stage yang ingin dijangkau
 *    - currentProgress: 0 = tepat di titik tersebut
 *                      50 = setengah jalan ke titik berikutnya
 *                      100 = mencapai titik berikutnya
 * 
 * 2. Contoh pengaturan:
 *    - Progress bar ke "Registration": currentStage: 'pendaftaran', currentProgress: 0
 *    - Progress bar ke "Bootcamp": currentStage: 'bootcamp', currentProgress: 0
 *    - Progress bar ke "Work Development": currentStage: 'pengerjaan_karya', currentProgress: 0  
 *    - Progress bar ke "Judging": currentStage: 'penjurian', currentProgress: 0
 *    - Progress bar ke "Final Stage": currentStage: 'tahap_final', currentProgress: 0
 *    - Semua selesai: currentStage: 'tahap_final', currentProgress: 100
 * 
 * 3. Progress bar akan otomatis menghitung posisi yang tepat
 *    sesuai dengan layout timeline points (0%, 25%, 50%, 75%, 100%)
 * 
 * 4. Ketika semua selesai (tahap_final + 100%), semua status otomatis menjadi 'completed'
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
  currentStage: 'pendaftaran', // Current stage for testing
  currentProgress: 100,        // 10% progress - in development
  
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
    
    // FASE 2: BOOTCAMP
    {
      id: 'bootcamp',
      phase: 'bootcamp',
      group: 'bootcamp',
      date: '25 OKT - 08 NOV',
      dateRange: '25 Oktober - 08 November 2025',
      description: 'bootcamp_desc',
      status: 'completed',
      progress: 100,
      details: ['bootcamp_detail1', 'bootcamp_detail2', 'bootcamp_detail3'],
      milestones: ['bootcamp_milestone1', 'bootcamp_milestone2', 'bootcamp_milestone3']
    },
    
    // FASE 3: PENGERJAAN KARYA
    {
      id: 'pengerjaan_karya',
      phase: 'pengerjaan_karya',
      group: 'pengerjaan_karya',
      date: '09 NOV - 15 DES',
      dateRange: '09 November - 15 Desember 2025',
      description: 'pengerjaan_karya_desc',
      status: 'completed',
      progress: 100,
      details: ['pengerjaan_karya_detail1', 'pengerjaan_karya_detail2', 'pengerjaan_karya_detail3'],
      milestones: ['pengerjaan_karya_milestone1', 'pengerjaan_karya_milestone2', 'pengerjaan_karya_milestone3']
    },
    
    // FASE 4: PENJURIAN & PENGUMUMAN
    {
      id: 'penjurian',
      phase: 'penjurian',
      group: 'penjurian',
      date: '16-25 DES',
      dateRange: '16 - 25 Desember 2025',
      description: 'penjurian_desc',
      status: 'completed',
      progress: 100,
      details: ['penjurian_detail1', 'penjurian_detail2'],
      milestones: ['penjurian_milestone1', 'penjurian_milestone2']
    },
    
    // FASE 5: TAHAP FINAL
    {
      id: 'tahap_final',
      phase: 'tahap_final',
      group: 'tahap_final',
      date: '26 DES - 02 JAN',
      dateRange: '26 Desember 2025 - 02 Januari 2026',
      description: 'tahap_final_desc',
      status: 'completed',
      progress: 100,
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
      id: 'bootcamp',
      name: 'bootcamp',
      period: 'Oktober - November 2025',
      description: 'bootcamp_group_desc',
      color: 'purple',
      items: []
    },
    {
      id: 'pengerjaan_karya', 
      name: 'pengerjaan_karya',
      period: 'November - Desember 2025',
      description: 'pengerjaan_karya_group_desc',
      color: 'blue',
      items: []
    },
    {
      id: 'penjurian',
      name: 'penjurian', 
      period: 'Desember 2025',
      description: 'penjurian_group_desc',
      color: 'yellow',
      items: []
    },
    {
      id: 'tahap_final',
      name: 'tahap_final',
      period: 'Desember 2025 - Januari 2026',
      description: 'tahap_final_group_desc', 
      color: 'red',
      items: []
    }
  ]
};

// Update timeline status otomatis
export function getUpdatedTimeline(settings: TimelineSettings): TimelineItem[] {
  const currentIndex = settings.items.findIndex(item => item.id === settings.currentStage);
  const isLastStage = currentIndex === settings.items.length - 1;
  const isCompletelyFinished = isLastStage && settings.currentProgress === 100;
  
  return settings.items.map((item, index) => {
    if (index < currentIndex) {
      return { ...item, status: 'completed' as TimelineStatus, progress: 100 };
    } else if (index === currentIndex) {
      // If this is the last stage and progress is 100%, mark as completed
      if (isCompletelyFinished) {
        return { ...item, status: 'completed' as TimelineStatus, progress: 100 };
      }
      // Otherwise, mark as current
      return { ...item, status: 'current' as TimelineStatus, progress: settings.currentProgress };
    } else {
      return { ...item, status: 'upcoming' as TimelineStatus, progress: 0 };
    }
  });
}

// Hitung progress bar width dengan alignment yang tepat ke setiap titik
export function calculateProgressWidth(settings: TimelineSettings): number {
  const currentIndex = settings.items.findIndex(item => item.id === settings.currentStage);
  const totalStages = settings.items.length;
  
  if (currentIndex === -1) return 0;
  
  // Calculate the exact position of each timeline point
  // Timeline points are positioned at: 0%, 25%, 50%, 75%, 100% for 5 stages
  const stagePositions = Array.from({ length: totalStages }, (_, i) => (i / (totalStages - 1)) * 100);
  
  // Get the position of the current stage
  const currentStagePosition = stagePositions[currentIndex];
  
  // If this is the last stage, calculate based on progress
  if (currentIndex === totalStages - 1) {
    const previousStagePosition = stagePositions[currentIndex - 1] || 0;
    const progressInCurrentStage = (settings.currentProgress / 100) * (currentStagePosition - previousStagePosition);
    return previousStagePosition + progressInCurrentStage;
  }
  
  // For other stages, calculate progress to the exact position of the current stage
  // Plus additional progress within that stage towards the next point
  const nextStagePosition = stagePositions[currentIndex + 1] || 100;
  const progressInCurrentStage = (settings.currentProgress / 100) * (nextStagePosition - currentStagePosition);
  
  return currentStagePosition + progressInCurrentStage;
}

// Alternative calculation for more precise alignment with timeline points
export function calculateProgressToPoint(settings: TimelineSettings, targetStageIndex: number): number {
  const totalStages = settings.items.length;
  const currentIndex = settings.items.findIndex(item => item.id === settings.currentStage);
  
  if (targetStageIndex <= currentIndex) {
    // If target is at or before current stage, show full progress to that point
    return ((targetStageIndex + 1) / totalStages) * 100;
  } else if (targetStageIndex === currentIndex + 1) {
    // If target is the next stage, show partial progress based on current progress
    const baseProgress = ((currentIndex + 1) / totalStages) * 100;
    const progressToNext = (settings.currentProgress / 100) * (100 / totalStages);
    return baseProgress + progressToNext;
  } else {
    // If target is beyond next stage, no progress shown
    return ((currentIndex + 1) / totalStages) * 100;
  }
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

// Helper function for adjusting progress to align perfectly with timeline points
export function adjustProgressToAlignment(settings: TimelineSettings): TimelineSettings {
  return {
    ...settings,
    // Ensure progress calculation aligns with visual timeline points
    currentProgress: settings.currentProgress
  };
}

// Function to get the exact percentage position of each timeline point
export function getTimelinePointPositions(totalStages: number): number[] {
  return Array.from({ length: totalStages }, (_, i) => (i / (totalStages - 1)) * 100);
}
