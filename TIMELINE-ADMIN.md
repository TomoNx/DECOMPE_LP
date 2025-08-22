# Timeline Admin Guide - Simple Version

## Cara Mengubah Timeline

### 1. Buka File Konfigurasi
File: `/src/config/timeline.ts`

### 2. Ubah Stage Aktif
Cari bagian ini:
```typescript
export const timelineSettings: TimelineSettings = {
  currentStage: 'training', // ← UBAH STAGE DI SINI
  currentProgress: 60,     // ← UBAH PROGRESS DI SINI
  // ...
}
```

### 3. Pilihan Stage:
- `'recruitment'` - Pendaftaran
- `'selection'` - Seleksi  
- `'training'` - Pelatihan
- `'competition'` - Kompetisi
- `'victory'` - Kemenangan

### 4. Atur Progress (0-100)
- `0` = Baru mulai
- `50` = Setengah jalan
- `100` = Selesai

### Contoh:
```typescript
// Ubah ke tahap kompetisi dengan progress 25%
currentStage: 'competition',
currentProgress: 25,

// Ubah ke tahap kemenangan dengan progress 100%
currentStage: 'victory', 
currentProgress: 100,
```

### 5. Simpan & Refresh
- Simpan file
- Refresh halaman timeline
- Timeline akan otomatis update

### Hasil:
- Progress bar otomatis menyesuaikan
- Status stage berubah otomatis
- Warna dan animasi update otomatis

### Layout:
- **Desktop**: Timeline horizontal
- **Mobile**: Timeline vertikal (tidak tumpuk)