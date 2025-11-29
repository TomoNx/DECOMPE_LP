# Winners Logo Guide

Folder ini berisi logo-logo tim pemenang DECOMPE 4.0.

## File yang Diperlukan

Upload logo tim dengan nama file berikut:

### Pemenang Umum
- `team1-logo.png` - Logo Tim Juara 1
- `team2-logo.png` - Logo Tim Juara 2
- `team3-logo.png` - Logo Tim Juara 3

### Penghargaan Khusus
- `favorite-logo.png` - Logo Tim Pemenang Favorit
- `best-presentation-logo.png` - Logo Tim Best Presentation

### Finalis
- `finalist1-logo.png` - Logo Tim Finalis 1
- `finalist2-logo.png` - Logo Tim Finalis 2

## Spesifikasi Logo

- **Format:** PNG (recommended) atau JPG
- **Ukuran:** Minimal 256x256 pixels (recommended 512x512 atau 1024x1024)
- **Background:** Transparent (PNG) atau solid color
- **Aspect Ratio:** Square (1:1) untuk hasil terbaik

## Cara Mengganti Data Tim

Edit file: `src/app/[locale]/hall-of-fame/page.tsx`

### Struktur Data Tim

```typescript
{
  teamName: "Nama Tim",
  university: "Nama Universitas",
  members: [
    { name: "Nama Anggota 1", role: "Team Leader" },
    { name: "Nama Anggota 2", role: "Developer" },
    { name: "Nama Anggota 3", role: "Designer" }
  ],
  logoPath: "/winners/team1-logo.png",
  projectTitle: "Judul Project"
}
```

### Contoh Mengganti Data Juara 1

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

## Tips

1. Pastikan nama file logo sesuai dengan yang tertera di atas
2. Gunakan logo dengan kualitas tinggi untuk tampilan terbaik
3. Jika tidak ada role/posisi untuk anggota, hapus field `role`
4. Field `projectTitle` bersifat opsional
