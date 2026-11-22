# Website Pasin Gambar (siap untuk GitHub Pages)

Folder ini adalah website statis lengkap: beranda, halaman aktivasi lisensi, dan kebijakan privasi.
Dwibahasa Indonesia/Inggris (tombol **ID | EN** di kanan atas). Tidak butuh server atau database.

## Isi folder
| File | Fungsi |
|---|---|
| `index.html` | Beranda: fitur, harga, cara beli, panduan SmartScreen, FAQ |
| `activate.html` | Halaman link aktivasi: `https://<website>/activate.html#k=<KODE>` |
| `privacy.html` | Kebijakan privasi (wajib untuk Microsoft Store) |
| `assets/config.js` | **Satu-satunya file yang perlu Anda ubah**: link download, Mayar, WA, email, harga |
| `assets/site.css`, `assets/site.js` | Tampilan dan teks dua bahasa |
| `assets/img/` | Gambar (dibuat dari `docs/brand/marketing/`) |

## Langkah upload ke GitHub Pages
1. Buat akun/organisasi GitHub, misalnya `pasingambar`.
2. Buat repository **publik** bernama persis `pasingambar.github.io`.
3. Di halaman repo, klik **Add file → Upload files**, lalu seret **isi** folder `website/` ini
   (file `index.html` harus berada di paling atas repo, bukan di dalam folder).
4. Klik **Commit changes**.
5. Buka **Settings → Pages**, pastikan *Source* = **Deploy from a branch**, branch = `main`, folder = `/ (root)`.
6. Tunggu 1–2 menit, lalu buka `https://pasingambar.github.io`.

## Sebelum/sesudah upload: isi `assets/config.js`
Tombol yang alamatnya masih `REPLACE_ME` otomatis tampil **"Segera hadir"** dan tidak bisa diklik,
jadi website aman diunggah walau belum lengkap. Isi satu per satu begitu datanya ada:

- `downloadUrl`: link installer di GitHub Releases, misalnya
  `https://github.com/pasingambar/download/releases/latest/download/PasinGambar-Setup.exe`
- `storeUrl`: link Microsoft Store (biarkan `''` kalau belum ada, tombolnya disembunyikan)
- `mayar.unlimited`, `mayar.bisnis5`, `mayar.bisnis10`: link produk Mayar
- `whatsapp`: nomor WA resmi, format `6281234567890`
- `email`: email dukungan
- `protocol`: skema link aktivasi, **harus sama** dengan `protocol` di `src/shared/app-config.ts`
- `prices` dan `earlyBird`: samakan dengan `src/shared/app-config.ts`

Setelah mengubah `config.js`, unggah ulang file itu saja (Add file → Upload files → timpa).

## Pakai domain sendiri (opsional)
Kalau nanti membeli domain (misalnya `pasingambar.my.id`): **Settings → Pages → Custom domain**,
lalu ikuti petunjuk DNS dari GitHub. Ingat untuk mengganti alamat website juga di `src/shared/app-config.ts`.
