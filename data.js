/* =========================================================
   DATA BARBERSHOP — UBAH SEMUA DATA DI FILE INI SAJA
   Semua teks, harga, barber, model potongan, dan kontak di website
   diambil dari sini, jadi kamu tidak perlu mengedit HTML.

   DUA BAHASA: teks yang perlu diterjemahkan ditulis seperti ini:
     { id: "Teks bahasa Indonesia", en: "English text" }
   Teks yang sama di kedua bahasa (nama, alamat) cukup ditulis biasa.
   ========================================================= */

const SHOP = {
  // Nama toko — dipakai di seluruh website, judul tab, pesan WhatsApp, DAN tulisan di logo.
  name: "Razor & Rose",
  city: "Bali",           // tulisan melingkar di logo: "BARBERÍA ★ BALI ★"
  since: "2015",
  tagline: {
    id: "Barbershop bergaya Chicano — fade tajam, slick back klasik, dan cukur pisau tradisional oleh barber berpengalaman. Old school vibes, fresh cuts.",
    en: "A Chicano-style barbershop — sharp fades, classic slick backs and traditional straight-razor shaves by experienced barbers. Old school vibes, fresh cuts.",
  },
  promo: {
    id: "Gratis hot towel shave untuk setiap Premium Haircut + diskon 15% kunjungan pertama. ¡Vámonos!",
    en: "Free hot towel shave with every Premium Haircut + 15% off your first visit. ¡Vámonos!",
  },

  // Nomor WhatsApp format internasional TANPA tanda + / spasi (62 = Indonesia)
  whatsapp: "6281234567890",
  phoneDisplay: "+62 812-3456-7890",
  instagram: "razorandrose.bali",
  address: "Jl. Sunset Road No. 88, Seminyak, Badung, Bali",
  // Teks pencarian untuk Google Maps (bisa alamat atau nama tempat)
  mapQuery: "Seminyak, Bali",

  // Jam buka, urut Senin–Minggu. Kosongkan open/close ("") jika tutup.
  hours: [
    { open: "10:00", close: "21:00" }, // Senin / Monday
    { open: "10:00", close: "21:00" }, // Selasa / Tuesday
    { open: "10:00", close: "21:00" }, // Rabu / Wednesday
    { open: "10:00", close: "21:00" }, // Kamis / Thursday
    { open: "13:00", close: "21:00" }, // Jumat / Friday
    { open: "09:00", close: "22:00" }, // Sabtu / Saturday
    { open: "09:00", close: "22:00" }, // Minggu / Sunday
  ],
};

// icon pilihan: scissors, crown, razor, palette, zap, kid, comb, spray
// minutes = durasi dalam menit
const SERVICES = [
  { icon: "scissors", name: "Haircut", price: 50000, minutes: 45,
    desc: { id: "Potong rambut + konsultasi gaya, cuci, dan styling.", en: "Haircut + style consultation, wash and styling." } },
  { icon: "crown", name: "Premium Haircut", price: 85000, minutes: 60,
    desc: { id: "Haircut + hot towel, pijat kepala, dan masker wajah.", en: "Haircut + hot towel, head massage and face mask." } },
  { icon: "razor", name: "Shaving", price: 35000, minutes: 30,
    desc: { id: "Cukur jenggot/kumis klasik dengan hot towel.", en: "Classic beard/moustache shave with a hot towel." } },
  { icon: "palette", name: "Hair Coloring", price: 150000, minutes: 90,
    desc: { id: "Pewarnaan rambut dengan produk aman & tahan lama.", en: "Hair coloring with safe, long-lasting products." } },
  { icon: "zap", name: "Hair Tattoo", price: 30000, minutes: 20,
    desc: { id: "Desain garis/pola unik di sisi rambut.", en: "Unique line or pattern designs shaved into the sides." } },
  { icon: "kid", name: "Kids Haircut", price: 40000, minutes: 30,
    desc: { id: "Potong rambut anak (di bawah 12 tahun).", en: "Haircut for kids (under 12 years old)." } },
];

// years = lama pengalaman (tahun)
const BARBERS = [
  { name: "Made Wirawan", role: "Head Barber", years: 10, specialty: "Slick Back & Skin Fade",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80" },
  { name: "Komang Adi Putra", role: "Senior Barber", years: 7, specialty: "Pompadour & Taper",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "Ketut Arya", role: "Barber", years: 4, specialty: "Razor Line & Hair Tattoo",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
];

// MODEL POTONGAN AMERICAN GANGSTER
// Foto contoh gratis dari Pexels (https://www.pexels.com). Setiap model punya beberapa foto:
// jika foto pertama gagal dimuat, website otomatis mencoba foto berikutnya.
// Ganti dengan foto pelanggan/model kamu sendiri, misal: photos: ["img/slickback.jpg"]
const px = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;
const STYLES = [
  { name: "Slick Back",
    era: { id: "Era Prohibition 1920-an", en: "Prohibition Era, 1920s" },
    desc: { id: "Rambut atas disisir rapi ke belakang dengan pomade kilap tinggi, sisi taper pendek. Ikon bos mafia Chicago.",
            en: "Top combed neatly back with high-shine pomade and short tapered sides. The look of the Chicago mob bosses." },
    photos: [px(5465330), px(12706272)] },
  { name: "Gentleman Side Part",
    era: { id: "Mafia Klasik 1940-an", en: "Classic Mob, 1940s" },
    desc: { id: "Belahan samping tegas (hard part) dengan razor, sisi rapi, finishing pomade semi-kilap. Cocok dengan setelan jas.",
            en: "A sharp razor-cut hard part, clean sides and a semi-shine pomade finish. Made to go with a suit." },
    photos: [px(33730878), px(5985168)] },
  { name: "Pompadour",
    era: { id: "Greaser 1950-an", en: "Greaser, 1950s" },
    desc: { id: "Volume tinggi di bagian depan disisir ke atas & belakang, sisi pendek. Gaya rock 'n roll yang berani.",
            en: "High volume at the front swept up and back, with short sides. A bold rock 'n' roll look." },
    photos: [px(7512659), px(20625560)] },
  { name: "Prohibition Undercut",
    era: { id: "Gangster 1920-an", en: "Gangster, 1920s" },
    desc: { id: "Atas panjang disisir ke belakang, sisi & belakang dicukur sangat pendek tanpa gradasi (disconnected).",
            en: "Long top slicked back, with very short sides and back and no blend (disconnected)." },
    photos: [px(5337944), px(2076932)] },
  { name: "Ducktail",
    era: { id: "Rockabilly 1950-an", en: "Rockabilly, 1950s" },
    desc: { id: "Sisi disisir ke belakang hingga bertemu di tengkuk membentuk ekor bebek. Klasik, rapi, penuh karakter.",
            en: "Sides combed back to meet at the nape like a duck's tail. Classic, neat and full of character." },
    photos: [px(27875829), px(9953160)] },
  { name: "Cholo Buzz",
    era: { id: "Chicano LA", en: "Chicano LA" },
    desc: { id: "Buzz cut super pendek & bersih dengan garis rambut tajam pakai pisau cukur. Simpel, tegas, khas Chicano.",
            en: "A super-short, clean buzz cut with a razor-sharp hairline. Simple, bold, pure Chicano." },
    photos: [px(14783247), px(17095842), px(5236964)] },
];
