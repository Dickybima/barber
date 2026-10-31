/* =========================================================
   DATA BARBERSHOP — UBAH SEMUA DATA DI FILE INI SAJA
   Semua teks, harga, barber, model potongan, dan kontak di website
   diambil dari sini, jadi kamu tidak perlu mengedit HTML.
   ========================================================= */

const SHOP = {
  name: "Gentleman's Cut",
  since: "2015",
  tagline: "Barbershop bergaya Chicano — fade tajam, slick back klasik, dan cukur pisau tradisional oleh barber berpengalaman. Old school vibes, fresh cuts.",
  promo: "Gratis hot towel shave untuk setiap Premium Haircut + diskon 15% kunjungan pertama. ¡Vámonos!",

  // Nomor WhatsApp format internasional TANPA tanda + / spasi (62 = Indonesia)
  whatsapp: "6281234567890",
  phoneDisplay: "0812-3456-7890",
  instagram: "gentlemanscut.bali",
  address: "Jl. Sunset Road No. 88, Seminyak, Badung, Bali",
  // Teks pencarian untuk Google Maps (bisa alamat atau nama tempat)
  mapQuery: "Seminyak, Bali",

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

// icon pilihan: scissors, crown, razor, palette, zap, kid, comb, spray
const SERVICES = [
  { icon: "scissors", name: "Haircut",          price: 50000,  duration: "45 menit", desc: "Potong rambut + konsultasi gaya, cuci, dan styling." },
  { icon: "crown", name: "Premium Haircut",  price: 85000,  duration: "60 menit", desc: "Haircut + hot towel, pijat kepala, dan masker wajah." },
  { icon: "razor", name: "Shaving",          price: 35000,  duration: "30 menit", desc: "Cukur jenggot/kumis klasik dengan hot towel." },
  { icon: "palette", name: "Hair Coloring",    price: 150000, duration: "90 menit", desc: "Pewarnaan rambut dengan produk aman & tahan lama." },
  { icon: "zap", name: "Hair Tattoo",      price: 30000,  duration: "20 menit", desc: "Desain garis/pola unik di sisi rambut." },
  { icon: "kid", name: "Kids Haircut",     price: 40000,  duration: "30 menit", desc: "Potong rambut anak (di bawah 12 tahun)." },
];

const BARBERS = [
  { name: "Made Wirawan",  role: "Head Barber",   exp: "10 tahun", specialty: "Slick Back & Skin Fade",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80" },
  { name: "Komang Adi Putra", role: "Senior Barber", exp: "7 tahun",  specialty: "Pompadour & Taper",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "Ketut Arya", role: "Barber",        exp: "4 tahun",  specialty: "Razor Line & Hair Tattoo",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
];

// MODEL POTONGAN AMERICAN GANGSTER
// Foto contoh dari Unsplash — ganti dengan foto pelanggan/model kamu sendiri (misal "img/slickback.jpg")
const u = (id) => `https://unsplash.com/photos/${id}/download?force=true&w=800`;
const STYLES = [
  { name: "Slick Back", era: "Era Prohibition 1920-an",
    desc: "Rambut atas disisir rapi ke belakang dengan pomade kilap tinggi, sisi taper pendek. Ikon bos mafia Chicago.",
    photo: u("ymkRPqPmRew") },
  { name: "Gentleman Side Part", era: "Mafia Klasik 1940-an",
    desc: "Belahan samping tegas (hard part) dengan razor, sisi rapi, finishing pomade semi-kilap. Cocok dengan setelan jas.",
    photo: u("rjA_c6lb9a0") },
  { name: "Pompadour", era: "Greaser 1950-an",
    desc: "Volume tinggi di bagian depan disisir ke atas & belakang, sisi pendek. Gaya rock 'n roll yang berani.",
    photo: u("8wFDFCnqvfI") },
  { name: "Prohibition Undercut", era: "Gangster 1920-an",
    desc: "Atas panjang disisir ke belakang, sisi & belakang dicukur sangat pendek tanpa gradasi (disconnected).",
    photo: u("PCyHNwzLQ9g") },
  { name: "Ducktail", era: "Rockabilly 1950-an",
    desc: "Sisi disisir ke belakang hingga bertemu di tengkuk membentuk ekor bebek. Klasik, rapi, penuh karakter.",
    photo: u("YtB9Q7GoOuk") },
  { name: "Cholo Buzz", era: "Chicano LA",
    desc: "Buzz cut super pendek & bersih dengan garis rambut tajam pakai pisau cukur. Simpel, tegas, khas Chicano.",
    photo: u("V3tmE7D2P_M") },
];
