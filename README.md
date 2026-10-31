# 💈 Website Barbershop

Website landing page barbershop yang responsif (HP & desktop). Tombol booking langsung membuka chat WhatsApp.

## Fitur
- Beranda (hero) dengan tombol booking
- Daftar layanan & harga
- Banner promo
- Profil barber
- Galeri hasil potongan (klik untuk memperbesar)
- Tombol booking langsung membuka chat WhatsApp
- Lokasi Google Maps + tabel jam buka (hari ini ditandai)
- Tombol WhatsApp melayang

## Cara Mengubah Data
**Cukup edit file `data.js`** — nama toko, nomor WhatsApp, alamat, jam buka, layanan, harga, barber, dan galeri ada di sana.

- Nomor WhatsApp pakai format `62xxxxxxxxxx` (tanpa `+`, spasi, atau angka 0 di depan).
- Untuk foto sendiri, buat folder `img/`, taruh fotonya di sana, lalu isi `photo`/`src` dengan misalnya `"img/barber1.jpg"`.
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
