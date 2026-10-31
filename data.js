/* =========================================================
   DATA BARBERSHOP — UBAH SEMUA DATA DI FILE INI SAJA
   Semua teks, harga, barber, galeri, dan kontak di website
   diambil dari sini, jadi kamu tidak perlu mengedit HTML.
   ========================================================= */

const SHOP = {
  name: "Gentleman's Cut",
  since: "2015",
  tagline: "Potongan presisi oleh barber berpengalaman, suasana nyaman, dan harga bersahabat.",
  promo: "Diskon 20% untuk pelajar & mahasiswa setiap Senin–Kamis. Tunjukkan kartu pelajar!",

  // Nomor WhatsApp format internasional TANPA tanda + / spasi (62 = Indonesia)
  whatsapp: "6281234567890",
  phoneDisplay: "0812-3456-7890",
  instagram: "gentlemanscut.id",
  address: "Jl. Sudirman No. 123, Jakarta Pusat",
  // Teks pencarian untuk Google Maps (bisa alamat atau nama tempat)
  mapQuery: "Monas, Jakarta Pusat",

  // Jam buka. Kosongkan open/close jika tutup.
  hours: [
    { day: "Senin",  open: "10:00", close: "21:00" },
    { day: "Selasa", open: "10:00", close: "21:00" },
    { day: "Rabu",   open: "10:00", close: "21:00" },
    { day: "Kamis",  open: "10:00", close: "21:00" },
    { day: "Jumat",  open: "13:00", close: "21:00" },
    { day: "Sabtu",  open: "09:00", close: "22:00" },
    { day: "Minggu", open: "09:00", close: "22:00" },
  ],
};

const SERVICES = [
  { icon: "✂️", name: "Haircut",          price: 50000,  duration: "45 menit", desc: "Potong rambut + konsultasi gaya, cuci, dan styling." },
  { icon: "👑", name: "Premium Haircut",  price: 85000,  duration: "60 menit", desc: "Haircut + hot towel, pijat kepala, dan masker wajah." },
  { icon: "🪒", name: "Shaving",          price: 35000,  duration: "30 menit", desc: "Cukur jenggot/kumis klasik dengan hot towel." },
  { icon: "🎨", name: "Hair Coloring",    price: 150000, duration: "90 menit", desc: "Pewarnaan rambut dengan produk aman & tahan lama." },
  { icon: "⚡", name: "Hair Tattoo",      price: 30000,  duration: "20 menit", desc: "Desain garis/pola unik di sisi rambut." },
  { icon: "🧒", name: "Kids Haircut",     price: 40000,  duration: "30 menit", desc: "Potong rambut anak (di bawah 12 tahun)." },
];

const BARBERS = [
  { name: "Andi Pratama",  role: "Head Barber",   exp: "10 tahun", specialty: "Fade & Pompadour",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80" },
  { name: "Rizky Maulana", role: "Senior Barber", exp: "7 tahun",  specialty: "Textured Crop & Undercut",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "Dimas Saputra", role: "Barber",        exp: "4 tahun",  specialty: "Hair Tattoo & Coloring",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
];

// Ganti dengan foto hasil potongan barbershop kamu sendiri (bisa file lokal, misal "img/galeri1.jpg")
const GALLERY = [
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80", caption: "Mid Fade" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80", caption: "Classic Cut" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80", caption: "Beard Trim" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80", caption: "Suasana Barbershop" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80", caption: "Skin Fade" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80", caption: "Styling" },
];
