# 💈 Website Barbershop

Website barbershop multi-halaman yang responsif (HP & desktop). Tombol booking langsung membuka chat WhatsApp.

## Halaman
| File | Isi |
|---|---|
| `index.html` | Beranda: hero, strip foto model rambut berjalan, dan kartu menuju halaman lain |
| `layanan.html` | Layanan & harga + promo |
| `barber.html` | Profil barber |
| `model.html` | Katalog model potongan American Gangster |
| `kontak.html` | Alamat, kontak, jam buka, Google Maps |

Navbar & footer ada di setiap file HTML — jika menambah/mengubah menu, ubah di kelima file.

## Dua Bahasa (Indonesia & Inggris)
- Tombol **ID | EN** di menu atas. Pilihan pengunjung diingat browser.
- Pengunjung baru otomatis melihat bahasa Indonesia jika browsernya berbahasa Indonesia, selain itu bahasa Inggris.
- Teks data (tagline, promo, deskripsi layanan & model) diterjemahkan di `data.js` dengan format `{ id: "...", en: "..." }`.
- Teks tetap (menu, judul, tombol, footer) diterjemahkan di `i18n.js`. Di HTML, elemen ber-atribut `data-i18n="kunci"` diisi otomatis dari file ini.

## Fitur
- Beranda (hero) dengan tombol booking
- Daftar layanan & harga
- Banner promo
- Profil barber
- Katalog model potongan American Gangster (foto bisa diperbesar + tombol booking per model)
- Tombol booking langsung membuka chat WhatsApp
- Lokasi Google Maps + tabel jam buka (hari ini ditandai)
- Tombol WhatsApp melayang

## Cara Mengubah Data
**Cukup edit file `data.js`** — nama toko, nomor WhatsApp, alamat, jam buka, layanan, harga, barber, dan model potongan (`STYLES`) ada di sana.

- Nomor WhatsApp pakai format `62xxxxxxxxxx` (tanpa `+`, spasi, atau angka 0 di depan).
- Untuk foto sendiri, buat folder `img/`, taruh fotonya di sana, lalu isi `photo` (barber) atau `photos` (model potongan) dengan misalnya `"img/barber1.jpg"`.
- Warna & font tema (Chicano) ada di bagian atas `style.css` (`--primary`, `--gold`, `--bg`, `--font-gothic`, dll).
- Teks statistik di hero (10+ tahun, 15rb+ pelanggan, 4.9★) ada di `index.html`.

## Cara Menjalankan
Buka `index.html` langsung di browser, atau jalankan server lokal:

```bash
python3 -m http.server 8000
```

lalu buka http://localhost:8000

## Hosting Gratis
Aktifkan **GitHub Pages**: Settings → Pages → Source: *Deploy from a branch* → pilih branch & folder `/ (root)`.

> Foto contoh berasal dari Unsplash. Ganti dengan foto barbershop kamu sendiri.
