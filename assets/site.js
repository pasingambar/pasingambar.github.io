/* Pasin Gambar website: language switch (ID/EN), links from config.js, starfield. No trackers. */
;(function () {
  'use strict'
  var S = window.SITE || {}
  var set = function (v) { return typeof v === 'string' && v !== '' && v.indexOf('REPLACE_ME') === -1 }
  var rp = function (n) { return 'Rp ' + Number(n).toLocaleString('id-ID') }

  var T = {
    id: {
      'brand': 'Pasin Gambar',
      'meta.title': 'Pasin Gambar — Kompres foto & PDF pas sesuai batas ukuran',
      'meta.desc': 'Aplikasi Windows untuk mengecilkan foto & PDF sampai pas dengan batas ukuran (misalnya 200 KB). 100% offline, file asli tidak diubah.',
      'nav.how': 'Cara kerja', 'nav.features': 'Fitur', 'nav.pricing': 'Harga', 'nav.faq': 'FAQ', 'nav.download': 'Download', 'nav.downloadLong': 'gratis',
      'hero.pill': 'Untuk Windows 10 & 11',
      'hero.title1': 'Foto & PDF', 'hero.title2': 'pas sesuai batas ukuran.',
      'hero.lead': 'Upload ditolak karena "file maksimal 200 KB"? Taruh filenya, pilih ukuran, selesai. Hasilnya dijamin tidak melebihi batas, tanpa internet.',
      'cta.download': 'Download gratis', 'cta.store': 'Microsoft Store', 'cta.soon': 'Segera hadir',
      'trust.offline': 'File tidak pernah diunggah', 'trust.original': 'File asli tidak diubah', 'trust.free': 'Gratis untuk dipakai',
      'strip.1': 'dari 6,2 MB jadi 179 KB', 'strip.2': 'diproses di komputer Anda', 'strip.3': 'JPG · PNG · PDF · HEIC · WebP', 'strip.4': 'Bahasa Indonesia & Inggris',
      'strip.1b': 'hemat 97%', 'strip.2b': '100% offline', 'strip.3b': 'banyak format', 'strip.4b': 'dwibahasa',
      'how.eyebrow': 'Cara kerja', 'how.title': 'Tiga langkah, tanpa ribet', 'how.lead': 'Dibuat untuk siapa saja, termasuk yang tidak terbiasa dengan aplikasi edit foto.',
      'how.1t': 'Taruh file', 'how.1p': 'Seret foto atau PDF ke aplikasi, atau tempel dengan Ctrl+V. Bisa juga dari HP iPhone (HEIC).',
      'how.2t': 'Pilih ukuran', 'how.2p': 'Klik 200 KB, 500 KB, 1 MB, atau ketik sendiri sesuai syarat portal. Ganti format juga bisa.',
      'how.3t': 'Langsung jadi', 'how.3p': 'File baru tersimpan di samping file asli, dijamin tidak melebihi batas. Tinggal upload.',
      'feat.eyebrow': 'Fitur', 'feat.title': 'Semua yang Anda perlukan untuk upload dokumen',
      'feat.lead': 'Cocok untuk pendaftaran CPNS, PPDB, lamaran kerja, beasiswa, dan portal lain yang membatasi ukuran file.',
      'feat.1t': 'Kecilkan sesuai target', 'feat.1p': 'Pilih batas ukuran, aplikasi mencari kualitas terbaik yang masih muat. Ukuran akhir diperiksa ulang setelah disimpan.',
      'feat.2t': 'Ubah format', 'feat.2p': 'JPG, PNG, PDF, WebP, AVIF. Foto HEIC dari iPhone langsung bisa dibuka.',
      'feat.3t': 'Gabung jadi 1 PDF', 'feat.3p': 'Satukan KTP, KK, ijazah, dan foto lain menjadi satu file PDF, urutannya tinggal diatur.',
      'feat.4t': 'Tanda tangani PDF', 'feat.4p': 'Foto tanda tangan di kertas, aplikasi membersihkan latar belakangnya, lalu tempel ke PDF.',
      'feat.5t': 'Ambil foto dari dokumen', 'feat.5p': 'Keluarkan semua gambar dari PDF, Word, PowerPoint, atau Excel sekaligus.',
      'feat.6t': 'Edit & sensor', 'feat.6p': 'Potong, putar, tambah teks, panah, atau sensor NIK sebelum dikirim.',
      'feat.7t': '100% offline & privat', 'feat.7p': 'Dokumen pribadi Anda tidak pernah dikirim ke internet. Semua diproses di komputer sendiri.',
      'feat.8t': 'File asli aman', 'feat.8p': 'Aplikasi selalu membuat file baru. File asli Anda tidak pernah ditimpa atau diubah.',
      'feat.9t': 'Banyak file sekaligus', 'feat.9p': 'Proses satu folder penuh sekaligus, atau klik kanan langsung dari Windows Explorer.',
      'price.eyebrow': 'Harga', 'price.title': 'Gratis untuk dipakai. Upgrade kalau butuh lebih.',
      'price.lead': 'Sekali bayar, berlaku selamanya, termasuk update. Tanpa langganan.',
      'plan.hemat': 'Hemat', 'plan.hematFor': 'Untuk sesekali mengecilkan foto & PDF.', 'plan.free': 'Gratis',
      'plan.unl': 'Unlimited', 'plan.unlFor': 'Semua fitur terbuka untuk 1 komputer.', 'plan.popular': 'Paling pas',
      'plan.bis': 'Unlimited Bisnis', 'plan.bisFor': 'Untuk kantor, sekolah, atau tim.', 'plan.from': 'mulai', 'plan.once': 'sekali bayar', 'plan.eb': 'Harga early bird',
      'li.compress': 'Kecilkan & ubah format tanpa batas', 'li.try': 'Coba 1× setiap alat Pro', 'li.ads': 'Ada kartu sponsor kecil', 'li.offline': '100% offline',
      'li.all': 'Semua fitur tanpa batas', 'li.batch': 'Banyak file & klik kanan dari folder', 'li.noads': 'Tanpa iklan', 'li.updates': 'Update gratis selamanya',
      'li.seats': '5 atau 10 komputer', 'li.priority': 'Prioritas dukungan WhatsApp', 'li.invoice': 'Invoice/kuitansi atas nama kantor', 'li.org': 'Nama kantor tampil di aplikasi',
      'btn.download': 'Download gratis', 'btn.buy': 'Beli Unlimited', 'btn.bis5': 'Bisnis 5 komputer', 'btn.bis10': 'Bisnis 10 komputer',
      'price.note': 'Lebih dari 10 komputer, atau ingin bayar lewat transfer bank?', 'price.noteWa': 'Chat WhatsApp',
      'buy.eyebrow': 'Cara upgrade', 'buy.title': 'Dari bayar sampai aktif, kurang dari 5 menit',
      'buy.1t': 'Klik "Beli"', 'buy.1p': 'Di website ini atau di dalam aplikasi (tombol Unlimited).',
      'buy.2t': 'Bayar', 'buy.2p': 'QRIS, transfer virtual account, atau e-wallet lewat Mayar.',
      'buy.3t': 'Terima kode', 'buy.3p': 'Kode lisensi dikirim ke WhatsApp atau email Anda.',
      'buy.4t': 'Klik & aktif', 'buy.4p': 'Buka link aktivasi di komputer, atau tempel kodenya di aplikasi. Tanpa internet.',
      'ss.eyebrow': 'Panduan install', 'ss.title': 'Muncul "Windows protected your PC"?',
      'ss.lead': 'Itu peringatan standar Windows untuk aplikasi baru yang belum banyak diunduh. Aplikasinya aman, berikut cara melanjutkannya:',
      'ss.1': 'Klik tulisan <b>More info</b> (Info selengkapnya).', 'ss.2': 'Klik tombol <b>Run anyway</b> (Tetap jalankan).', 'ss.3': 'Ikuti langkah instalasi sampai selesai. Peringatan ini hanya muncul sekali.',
      'ss.tip': 'Tidak mau melihat peringatan ini? Pasang lewat Microsoft Store (jika tersedia), isinya sama persis.',
      'ss.app': 'Aplikasi', 'ss.pub': 'Penerbit', 'ss.unknown': 'Unknown publisher',
      'faq.eyebrow': 'FAQ', 'faq.title': 'Pertanyaan yang sering diajukan',
      'faq.1q': 'Apakah benar-benar gratis?', 'faq.1a': 'Ya. Versi Hemat bisa dipakai selamanya untuk mengecilkan dan mengubah format foto & PDF. Alat tambahan seperti gabung PDF dan tanda tangan bisa dicoba 1×, lalu dibuka penuh dengan Unlimited.',
      'faq.2q': 'Apakah file saya dikirim ke internet?', 'faq.2a': 'Tidak. Semua proses terjadi di komputer Anda. Dokumen seperti KTP, KK, dan ijazah tidak pernah diunggah ke server mana pun.',
      'faq.3q': 'Apakah ukurannya benar-benar dijamin?', 'faq.3a': 'Ya. Setelah file disimpan, aplikasi memeriksa ukuran file di disk. Kalau tidak memungkinkan (misalnya batasnya terlalu kecil), aplikasi memberi tahu dengan jelas, bukan diam-diam melebihi batas.',
      'faq.4q': 'Apakah bisa di HP atau Mac?', 'faq.4a': 'Saat ini Pasin Gambar tersedia untuk Windows 10 dan 11. Foto dari HP (termasuk HEIC dari iPhone) tinggal dipindahkan ke komputer.',
      'faq.5q': 'Bagaimana kalau ganti laptop?', 'faq.5a': 'Pasang aplikasinya di laptop baru, lalu tempel kode lisensi yang sama. Lisensi Unlimited berlaku untuk 1 komputer dalam satu waktu.',
      'faq.6q': 'Apakah ada langganan?', 'faq.6a': 'Tidak. Semua paket sekali bayar dan berlaku selamanya, termasuk update.',
      'faq.7q': 'Bagaimana kalau ada masalah?', 'faq.7a': 'Hubungi kami lewat WhatsApp atau email di bagian bawah halaman ini. Kalau pembayaran terpotong dua kali atau lisensi tidak bisa diaktifkan, uang Anda kami kembalikan.',
      'final.title': 'Siap upload tanpa drama?', 'final.lead': 'Download gratis, coba sekarang. Upgrade hanya kalau Anda butuh lebih.',
      'foot.privacy': 'Kebijakan privasi', 'foot.activate': 'Aktivasi lisensi', 'foot.contact': 'Kontak', 'foot.rights': 'Hak cipta dilindungi.', 'foot.version': 'Versi',
      // privacy
      'pv.title': 'Kebijakan Privasi', 'pv.date': 'Berlaku sejak 21 November 2026',
      'pv.intro': 'Pasin Gambar dibuat oleh JT soft. Halaman ini menjelaskan data apa saja yang diproses oleh aplikasi dan website ini.',
      'pv.h1': 'File Anda tetap di komputer Anda', 'pv.p1': 'Semua foto, PDF, dan dokumen yang Anda proses diolah langsung di komputer Anda. File tidak pernah diunggah ke server kami atau pihak lain. File asli tidak pernah diubah; aplikasi selalu membuat file baru.',
      'pv.h2': 'Data lisensi', 'pv.p2': 'Kode lisensi berisi nama, email, jenis paket, dan (untuk Bisnis) nama organisasi yang Anda berikan saat membeli. Kode ini disimpan hanya di komputer Anda dan diperiksa tanpa internet.',
      'pv.h3': 'Koneksi internet', 'pv.p3': 'Aplikasi tidak membutuhkan internet untuk bekerja. Versi Hemat dapat mengambil satu file info kecil (pembaruan versi dan kartu sponsor) dari website kami; pada paket berbayar ini hanya terjadi jika Anda mengizinkannya. File info ini tidak berisi dan tidak mengirim data pribadi atau file Anda.',
      'pv.h4': 'Pembelian', 'pv.p4': 'Pembayaran diproses oleh Mayar (mayar.id) atau transfer bank langsung. Kami menerima nama, email, dan nomor WhatsApp Anda untuk mengirim kode lisensi dan bukti pembelian, dan tidak membagikannya ke pihak lain.',
      'pv.h5': 'Website ini', 'pv.p5': 'Website ini tidak memakai cookie pelacak atau analitik. Huruf (font) dimuat dari Google Fonts. Kode aktivasi di link aktivasi ada di bagian setelah tanda # sehingga tidak pernah dikirim ke server.',
      'pv.h6': 'Kontak', 'pv.p6': 'Pertanyaan tentang privasi? Hubungi kami:',
      // activate
      'ac.title': 'Aktifkan Pasin Gambar', 'ac.lead': 'Terima kasih sudah membeli! Satu klik lagi.',
      'ac.open': 'Buka aplikasi & aktifkan', 'ac.copy': 'Salin kode', 'ac.copied': 'Tersalin ✓ Tempel di aplikasi dengan Ctrl+V',
      'ac.s1': 'Buka halaman ini di komputer yang sudah terpasang Pasin Gambar (bukan di HP).', 'ac.s2': 'Klik "Buka aplikasi & aktifkan". Kalau browser bertanya, pilih Buka/Izinkan.', 'ac.s3': 'Tidak terbuka? Klik "Salin kode", buka aplikasi, lalu tekan Ctrl+V.',
      'ac.missing': 'Kode aktivasi tidak ditemukan di link ini. Buka lagi link dari pesan pembelian Anda.', 'ac.back': 'Kembali ke beranda',
    },
    en: {
      'brand': 'Pasin Photo',
      'meta.title': 'Pasin Photo — Compress photos & PDFs to fit any size limit',
      'meta.desc': 'A Windows app that shrinks photos & PDFs to fit an upload limit (e.g. 200 KB). 100% offline, your original files stay untouched.',
      'nav.how': 'How it works', 'nav.features': 'Features', 'nav.pricing': 'Pricing', 'nav.faq': 'FAQ', 'nav.download': 'Download', 'nav.downloadLong': 'free',
      'hero.pill': 'For Windows 10 & 11',
      'hero.title1': 'Photos & PDFs', 'hero.title2': 'that fit any size limit.',
      'hero.lead': 'Upload rejected because of a "max 200 KB" rule? Drop the file, pick a size, done. The result is guaranteed to fit, with no internet needed.',
      'cta.download': 'Download free', 'cta.store': 'Microsoft Store', 'cta.soon': 'Coming soon',
      'trust.offline': 'Files are never uploaded', 'trust.original': 'Originals stay untouched', 'trust.free': 'Free to use',
      'strip.1': 'from 6.2 MB to 179 KB', 'strip.2': 'processed on your PC', 'strip.3': 'JPG · PNG · PDF · HEIC · WebP', 'strip.4': 'Indonesian & English',
      'strip.1b': '97% smaller', 'strip.2b': '100% offline', 'strip.3b': 'many formats', 'strip.4b': 'bilingual',
      'how.eyebrow': 'How it works', 'how.title': 'Three steps, no fuss', 'how.lead': 'Made for everyone, including people who never use photo editors.',
      'how.1t': 'Drop your file', 'how.1p': 'Drag photos or PDFs into the app, or paste with Ctrl+V. iPhone photos (HEIC) work too.',
      'how.2t': 'Pick a size', 'how.2p': 'Click 200 KB, 500 KB, 1 MB, or type the limit the portal asks for. You can change the format too.',
      'how.3t': 'Done', 'how.3p': 'The new file is saved next to the original and is guaranteed to fit. Just upload it.',
      'feat.eyebrow': 'Features', 'feat.title': 'Everything you need to upload documents',
      'feat.lead': 'Great for job applications, school and university admissions, scholarships, and any portal that limits file size.',
      'feat.1t': 'Shrink to a target', 'feat.1p': 'Pick a size limit and the app finds the best quality that still fits. The final size is checked again after saving.',
      'feat.2t': 'Convert formats', 'feat.2p': 'JPG, PNG, PDF, WebP, AVIF. iPhone HEIC photos open right away.',
      'feat.3t': 'Merge into 1 PDF', 'feat.3p': 'Combine ID cards, certificates and photos into a single PDF, in the order you want.',
      'feat.4t': 'Sign PDFs', 'feat.4p': 'Take a photo of your signature on paper; the app cleans the background and stamps it onto a PDF.',
      'feat.5t': 'Extract photos', 'feat.5p': 'Pull every image out of a PDF, Word, PowerPoint or Excel file at once.',
      'feat.6t': 'Edit & redact', 'feat.6p': 'Crop, rotate, add text and arrows, or blur ID numbers before sending.',
      'feat.7t': '100% offline & private', 'feat.7p': 'Your personal documents are never sent to the internet. Everything runs on your own PC.',
      'feat.8t': 'Originals are safe', 'feat.8p': 'The app always writes a new file. Your original is never overwritten or changed.',
      'feat.9t': 'Many files at once', 'feat.9p': 'Process a whole folder at once, or right-click straight from Windows Explorer.',
      'price.eyebrow': 'Pricing', 'price.title': 'Free to use. Upgrade when you need more.',
      'price.lead': 'Pay once, keep it forever, updates included. No subscription.',
      'plan.hemat': 'Free', 'plan.hematFor': 'For shrinking a photo or PDF now and then.', 'plan.free': 'Free',
      'plan.unl': 'Unlimited', 'plan.unlFor': 'Every feature unlocked on 1 PC.', 'plan.popular': 'Best fit',
      'plan.bis': 'Unlimited Business', 'plan.bisFor': 'For offices, schools and teams.', 'plan.from': 'from', 'plan.once': 'one-time', 'plan.eb': 'Early-bird price',
      'li.compress': 'Unlimited shrinking & converting', 'li.try': 'Try each Pro tool once', 'li.ads': 'Small sponsor card', 'li.offline': '100% offline',
      'li.all': 'Every feature, no limits', 'li.batch': 'Many files & right-click from folders', 'li.noads': 'No ads', 'li.updates': 'Free updates forever',
      'li.seats': '5 or 10 PCs', 'li.priority': 'Priority WhatsApp support', 'li.invoice': 'Invoice/receipt in the office name', 'li.org': 'Office name shown in the app',
      'btn.download': 'Download free', 'btn.buy': 'Buy Unlimited', 'btn.bis5': 'Business, 5 PCs', 'btn.bis10': 'Business, 10 PCs',
      'price.note': 'More than 10 PCs, or prefer a bank transfer?', 'price.noteWa': 'Chat on WhatsApp',
      'buy.eyebrow': 'How to upgrade', 'buy.title': 'From payment to activated in under 5 minutes',
      'buy.1t': 'Click "Buy"', 'buy.1p': 'On this website or inside the app (the Unlimited button).',
      'buy.2t': 'Pay', 'buy.2p': 'QRIS, virtual account transfer or e-wallet via Mayar.',
      'buy.3t': 'Get your code', 'buy.3p': 'Your license code arrives on WhatsApp or by email.',
      'buy.4t': 'Click & done', 'buy.4p': 'Open the activation link on your PC, or paste the code in the app. No internet needed.',
      'ss.eyebrow': 'Install guide', 'ss.title': 'Seeing "Windows protected your PC"?',
      'ss.lead': "That's Windows' standard warning for new apps that haven't been downloaded many times yet. The app is safe; here's how to continue:",
      'ss.1': 'Click <b>More info</b>.', 'ss.2': 'Click <b>Run anyway</b>.', 'ss.3': 'Follow the installer to the end. This warning only shows once.',
      'ss.tip': "Rather not see this warning? Install from the Microsoft Store (when available); it's exactly the same app.",
      'ss.app': 'App', 'ss.pub': 'Publisher', 'ss.unknown': 'Unknown publisher',
      'faq.eyebrow': 'FAQ', 'faq.title': 'Frequently asked questions',
      'faq.1q': 'Is it really free?', 'faq.1a': 'Yes. The Free plan shrinks and converts photos & PDFs forever. Extra tools like merging and signing PDFs can be tried once, then unlocked with Unlimited.',
      'faq.2q': 'Are my files sent to the internet?', 'faq.2a': 'No. Everything happens on your PC. Documents like ID cards and certificates are never uploaded to any server.',
      'faq.3q': 'Is the size really guaranteed?', 'faq.3a': "Yes. After saving, the app checks the file size on disk. If a limit can't be reached (for example it's far too small), the app tells you clearly instead of quietly going over.",
      'faq.4q': 'Does it work on phones or Mac?', 'faq.4a': 'Pasin Photo is currently available for Windows 10 and 11. Photos from your phone (including iPhone HEIC) just need to be copied to the PC.',
      'faq.5q': 'What if I change laptops?', 'faq.5a': 'Install the app on the new laptop and paste the same license code. An Unlimited license is for 1 PC at a time.',
      'faq.6q': 'Is there a subscription?', 'faq.6a': 'No. Every plan is a one-time payment that lasts forever, updates included.',
      'faq.7q': 'What if something goes wrong?', 'faq.7a': "Contact us on WhatsApp or by email at the bottom of this page. If you were charged twice or the license can't be activated, we'll refund you.",
      'final.title': 'Ready to upload without the drama?', 'final.lead': 'Download free and try it now. Upgrade only if you need more.',
      'foot.privacy': 'Privacy policy', 'foot.activate': 'Activate license', 'foot.contact': 'Contact', 'foot.rights': 'All rights reserved.', 'foot.version': 'Version',
      'pv.title': 'Privacy Policy', 'pv.date': 'Effective 21 November 2026',
      'pv.intro': 'Pasin Photo is made by JT soft. This page explains what data the app and this website handle.',
      'pv.h1': 'Your files stay on your PC', 'pv.p1': 'Every photo, PDF and document you process is handled directly on your computer. Files are never uploaded to our servers or anyone else. Originals are never changed; the app always writes a new file.',
      'pv.h2': 'License data', 'pv.p2': 'A license code contains the name, email, plan and (for Business) organisation name you gave when buying. It is stored only on your PC and checked without the internet.',
      'pv.h3': 'Internet connection', 'pv.p3': 'The app does not need the internet to work. The Free plan may download one small info file (version updates and a sponsor card) from our website; on paid plans this only happens if you allow it. This file contains no personal data and none of your data or files are sent.',
      'pv.h4': 'Purchases', 'pv.p4': 'Payments are handled by Mayar (mayar.id) or a direct bank transfer. We receive your name, email and WhatsApp number to send your license code and receipt, and we do not share them with anyone.',
      'pv.h5': 'This website', 'pv.p5': 'This website uses no tracking cookies or analytics. Fonts load from Google Fonts. The code in an activation link sits after the # sign, so it is never sent to any server.',
      'pv.h6': 'Contact', 'pv.p6': 'Questions about privacy? Reach us at:',
      'ac.title': 'Activate Pasin Photo', 'ac.lead': 'Thank you for your purchase! One more click.',
      'ac.open': 'Open the app & activate', 'ac.copy': 'Copy code', 'ac.copied': 'Copied ✓ Paste it in the app with Ctrl+V',
      'ac.s1': 'Open this page on the PC where Pasin Photo is installed (not on your phone).', 'ac.s2': 'Click "Open the app & activate". If the browser asks, choose Open/Allow.', 'ac.s3': 'Nothing happened? Click "Copy code", open the app and press Ctrl+V.',
      'ac.missing': 'No activation code in this link. Open the link from your purchase message again.', 'ac.back': 'Back to home',
    },
  }

  function pickLang() {
    var q = new URLSearchParams(location.search).get('lang')
    if (q === 'id' || q === 'en') return q
    try { var s = localStorage.getItem('lang'); if (s === 'id' || s === 'en') return s } catch (e) {}
    return (navigator.language || 'id').toLowerCase().indexOf('id') === 0 ? 'id' : 'en'
  }
  var lang = pickLang()

  function apply() {
    var d = T[lang]
    document.documentElement.lang = lang
    document.querySelectorAll('[data-i18n]').forEach(function (el) { var v = d[el.getAttribute('data-i18n')]; if (v != null) el.textContent = v })
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) { var v = d[el.getAttribute('data-i18n-alt')]; if (v != null) el.alt = v })
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) { var v = d[el.getAttribute('data-i18n-html')]; if (v != null) el.innerHTML = v })
    document.querySelectorAll('[data-src-' + lang + ']').forEach(function (el) { el.src = el.getAttribute('data-src-' + lang) })
    var t = document.querySelector('[data-title]'); if (t) document.title = d[t.getAttribute('data-title')] || document.title
    var m = document.querySelector('meta[name="description"]'); if (m && d['meta.desc'] && document.body.dataset.page === 'home') m.content = d['meta.desc']
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)) })
    wireLinks()
  }

  // Link a button to a config URL; missing URLs show a disabled "Coming soon" state.
  function link(el, url) {
    if (set(url)) { el.href = url; el.removeAttribute('aria-disabled'); el.removeAttribute('tabindex') }
    else {
      el.removeAttribute('href'); el.setAttribute('aria-disabled', 'true'); el.setAttribute('tabindex', '-1')
      var lab = el.querySelector('[data-label]'); if (lab) lab.textContent = T[lang]['cta.soon']
    }
  }
  function wa(text) { return set(S.whatsapp) ? 'https://wa.me/' + S.whatsapp + (text ? '?text=' + encodeURIComponent(text) : '') : '' }

  /** "62895639127212" -> "+62 895-6391-27212" */
  function waDisplay(n) {
    n = String(n).replace(/\D/g, '')
    if (n.indexOf('62') !== 0) return '+' + n
    var r = n.slice(2)
    return '+62 ' + r.slice(0, 3) + '-' + r.slice(3, 7) + '-' + r.slice(7)
  }

  function wireLinks() {
    document.querySelectorAll('[data-link="download"]').forEach(function (el) { link(el, S.downloadUrl) })
    document.querySelectorAll('[data-link="store"]').forEach(function (el) { if (set(S.storeUrl)) link(el, S.storeUrl); else el.hidden = true })
    document.querySelectorAll('[data-link="mayar-unlimited"]').forEach(function (el) { link(el, S.mayar && S.mayar.unlimited) })
    document.querySelectorAll('[data-link="mayar-bisnis5"]').forEach(function (el) { link(el, S.mayar && S.mayar.bisnis5) })
    document.querySelectorAll('[data-link="mayar-bisnis10"]').forEach(function (el) { link(el, S.mayar && S.mayar.bisnis10) })
    document.querySelectorAll('[data-link="wa"]').forEach(function (el) {
      var u = wa(lang === 'id' ? 'Halo, saya ingin bertanya tentang ' + T.id.brand + '.' : 'Hi, I have a question about ' + T.en.brand + '.')
      if (u) { el.href = u; el.hidden = false } else el.hidden = true
      if (u && el.hasAttribute('data-wa-label')) el.textContent = 'WhatsApp ' + waDisplay(S.whatsapp)
    })
    document.querySelectorAll('[data-link="email"]').forEach(function (el) {
      if (set(S.email)) { el.href = 'mailto:' + S.email; el.textContent = S.email; el.hidden = false } else el.hidden = true
    })
    var p = S.prices || {}
    document.querySelectorAll('[data-price]').forEach(function (el) {
      var k = el.dataset.price
      if (k === 'unlimited') el.textContent = rp(S.earlyBird ? p.unlimitedEarlyBird : p.unlimited)
      if (k === 'unlimitedFull') el.textContent = S.earlyBird ? rp(p.unlimited) : ''
      if (k === 'bisnis5') el.textContent = rp(p.bisnis5)
      if (k === 'bisnis10') el.textContent = rp(p.bisnis10)
    })
    document.querySelectorAll('[data-if-wa]').forEach(function (el) { el.hidden = !set(S.whatsapp) })
    document.querySelectorAll('[data-if-earlybird]').forEach(function (el) { el.hidden = !S.earlyBird })
    document.querySelectorAll('[data-version]').forEach(function (el) { el.textContent = S.version || '' })
    document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear() })
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.dataset.lang
      try { localStorage.setItem('lang', lang) } catch (e) {}
      apply()
    })
  })

  // Quiet starfield (static, seeded).
  var c = document.getElementById('stars')
  if (c) {
    var draw = function () {
      var dpr = Math.min(window.devicePixelRatio || 1, 2)
      c.width = innerWidth * dpr; c.height = innerHeight * dpr; c.style.width = innerWidth + 'px'; c.style.height = innerHeight + 'px'
      var x = c.getContext('2d'), s = 9, r = function () { return (s = (s * 16807) % 2147483647) / 2147483647 }
      var n = Math.round((innerWidth * innerHeight) / 2600)
      for (var i = 0; i < n; i++) {
        var big = r() > 0.95
        x.fillStyle = 'rgba(225,215,255,' + ((big ? 0.6 : 0.25) * (0.4 + r() * 0.6)) + ')'
        x.beginPath(); x.arc(r() * c.width, r() * c.height, (big ? 1.2 + r() : 0.4 + r() * 0.6) * dpr, 0, 7); x.fill()
      }
    }
    draw(); var to; addEventListener('resize', function () { clearTimeout(to); to = setTimeout(draw, 200) })
  }

  window.__site = { T: T, lang: function () { return lang }, set: set }
  apply()
})()
