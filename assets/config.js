/*
 * ============================================================
 *  PENGATURAN WEBSITE — cukup ubah file ini saja.
 *  WEBSITE SETTINGS — this is the only file you need to edit.
 * ============================================================
 *  Tombol yang alamatnya masih 'REPLACE_ME' otomatis tampil "Segera hadir"
 *  (tidak bisa diklik), jadi website aman diunggah walau belum lengkap.
 */
window.SITE = {
  // Link download installer .exe (GitHub Releases). Contoh:
  // 'https://github.com/pasingambar/download/releases/latest/download/PasinGambar-Setup.exe'
  downloadUrl: 'REPLACE_ME',

  // Halaman aplikasi di Microsoft Store (kosongkan '' kalau belum ada → tombolnya disembunyikan).
  storeUrl: '',

  // Link produk Mayar.
  mayar: {
    unlimited: 'REPLACE_ME',
    bisnis5: 'REPLACE_ME',
    bisnis10: 'REPLACE_ME',
  },

  // Nomor WhatsApp resmi, format internasional tanpa + dan spasi. Contoh: '6281234567890'
  whatsapp: '62895639127212',

  // Email dukungan. Contoh: 'pasingambar@gmail.com'
  email: 'fandyjoansyah@gmail.com',

  // Skema link aktivasi, harus SAMA dengan `protocol` di src/shared/app-config.ts. Contoh: 'pasingambar'
  protocol: 'REPLACE_ME',

  // Harga (Rupiah). Samakan dengan src/shared/app-config.ts.
  earlyBird: true,
  prices: {
    unlimited: 49000,
    unlimitedEarlyBird: 29000,
    bisnis5: 150000,
    bisnis10: 250000,
  },

  // Versi terbaru yang ditampilkan di website.
  version: '1.0.0',
}
