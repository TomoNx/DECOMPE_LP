# 🏆 Hall of Fame - Panduan Penggunaan

## Akses Halaman
Halaman Hall of Fame dapat diakses di:
- **English:** `/en/hall-of-fame`
- **Indonesian:** `/id/hall-of-fame`

Link sudah otomatis tersedia di navbar dengan icon Trophy 🏆

✨ **Multi-Language Support:** Semua teks otomatis menyesuaikan dengan bahasa yang dipilih user!

## Struktur Template

Template ini menampilkan **7 tim pemenang** dengan layout khusus:

### Layout Pemenang Umum (3 kolom sejajar)
- 🥈 **Juara 2** - Kiri
- 🥇 **Juara 1** - Tengah, posisi sedikit lebih ke atas (elevated)
- 🥉 **Juara 3** - Kanan

### Penghargaan Khusus (Side by Side)
- ⭐ **Pemenang Favorit** - Kiri
- 📊 **Best Presentation** - Kanan

### Finalis (Side by Side)
- 🎖️ **Finalis 1** - Kiri
- 🎖️ **Finalis 2** - Kanan

## Cara Mengganti Data Tim

### 1. Edit File Page
File yang perlu diubah: `src/app/[locale]/hall-of-fame/page.tsx`

### 2. Struktur Data Tim

```typescript
{
  teamName: "Nama Tim",           // Nama tim
  university: "Nama Universitas", // Asal universitas
  members: [                      // Array anggota tim
    { 
      name: "Nama Anggota 1", 
      role: "Team Leader"        // Opsional: bisa dihapus jika tidak perlu
    },
    { name: "Nama Anggota 2", role: "Developer" },
    { name: "Nama Anggota 3", role: "Designer" }
  ],
  logoPath: "/winners/team1-logo.png",  // Path ke logo tim
  projectTitle: "Judul Project"         // Opsional: judul project tim
}
```

### 3. Contoh Pengisian Data

#### Juara 1
```typescript
{
  teamName: "Innovators",
  university: "Institut Teknologi Bandung",
  members: [
    { name: "Ahmad Rizki", role: "Team Leader" },
    { name: "Sarah Putri", role: "AI Developer" },
    { name: "Budi Santoso", role: "UI/UX Designer" }
  ],
  logoPath: "/winners/team1-logo.png",
  projectTitle: "Smart City Security System"
}
```

#### Best Presentation
```typescript
{
  teamName: "Tech Presenters",
  university: "Universitas Indonesia",
  members: [
    { name: "Dina Pratiwi", role: "Team Leader" },
    { name: "Eko Wijaya", role: "Presenter" },
    { name: "Fitri Amalia", role: "Content Designer" }
  ],
  logoPath: "/winners/best-presentation-logo.png",
  projectTitle: "Fintech Innovation for Rural Areas"
}
```

## Upload Logo Tim

### Lokasi File
Upload logo tim ke folder: `public/winners/`

### Nama File yang Diperlukan
- `team1-logo.png` - Juara 1
- `team2-logo.png` - Juara 2
- `team3-logo.png` - Juara 3
- `favorite-logo.png` - Pemenang Favorit
- `best-presentation-logo.png` - Best Presentation
- `finalist1-logo.png` - Finalis 1
- `finalist2-logo.png` - Finalis 2

### Spesifikasi Logo
- **Format:** PNG (recommended) atau JPG/JPEG
- **Ukuran:** Minimal 256x256px, disarankan 512x512px atau 1024x1024px
- **Aspect Ratio:** Square (1:1) untuk hasil terbaik
- **Background:** Transparent PNG atau solid color

## Tips Penggunaan

### 1. Menambah/Mengurangi Anggota Tim
Cukup tambah atau hapus object di array `members`:
```typescript
members: [
  { name: "Anggota 1" },
  { name: "Anggota 2" },
  { name: "Anggota 3" },
  { name: "Anggota 4" }  // Tambah anggota baru
]
```

### 2. Tanpa Role/Posisi
Jika tidak perlu menampilkan role, hapus field `role`:
```typescript
members: [
  { name: "Ahmad Rizki" },
  { name: "Sarah Putri" },
  { name: "Budi Santoso" }
]
```

### 3. Tanpa Project Title
Field `projectTitle` bersifat opsional, bisa dihapus:
```typescript
{
  teamName: "Tim ABC",
  university: "Universitas XYZ",
  members: [...],
  logoPath: "/winners/team1-logo.png"
  // projectTitle dihapus
}
```

### 4. Fallback Logo
Jika logo tidak ditemukan, akan otomatis menampilkan icon Users sebagai placeholder.

## Styling & Design

Halaman menggunakan tema yang konsisten dengan website DECOMPE:
- ✨ Dark theme dengan red accent
- 🎨 Glassmorphism effects
- ⚡ Hover animations
- 📱 Responsive design (mobile-friendly)
- 🌐 **Multi-language support** (English & Indonesian)
- 🏆 **Featured Champion Layout** - Juara 1 lebih menonjol di tengah

### Color Coding Badges
- 🥇 Juara 1: Gold gradient
- 🥈 Juara 2: Silver gradient
- 🥉 Juara 3: Bronze gradient
- ⭐ Pemenang Favorit: Purple
- 📊 Best Presentation: Green
- 🎖️ Finalis: Blue

## Testing

Setelah mengubah data, test dengan:
```bash
npm run dev
```

Atau build untuk production:
```bash
npm run build
```

## Troubleshooting

### Logo tidak muncul
- ✅ Pastikan nama file sesuai dengan `logoPath`
- ✅ File harus ada di folder `public/winners/`
- ✅ Periksa ekstensi file (.png, .jpg, .jpeg)

### Data tidak update
- ✅ Restart dev server (`npm run dev`)
- ✅ Clear browser cache (Ctrl+Shift+R)

---

**Created for DECOMPE 4.0** 🚀
