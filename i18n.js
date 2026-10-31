/* =========================================================
   TERJEMAHAN TEKS TETAP (menu, judul, tombol) — ID & EN
   Di HTML, elemen dengan data-i18n="kunci" akan diisi dari sini.
   Untuk teks data (layanan, model, promo) lihat data.js.
   ========================================================= */

const I18N = {
  id: {
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.barbers": "Barber",
    "nav.styles": "Model",
    "nav.contact": "Kontak",
    "nav.book": "Booking",

    "hero.book": "Booking Sekarang",
    "hero.services": "Lihat Layanan",
    "hero.years": "Tahun Berdiri",
    "hero.clients": "Pelanggan",
    "hero.rating": "Rating Google",

    "promo.title": "Promo Bulan Ini",
    "promo.cta": "Ambil Promo",
    "marquee.label": "Model potongan rambut",

    "explore.title": "Jelajahi Barbershop Kami",
    "explore.services.title": "Layanan & Harga",
    "explore.services.desc": "Haircut, shaving, coloring, hair tattoo, dan lainnya.",
    "explore.services.link": "Lihat Layanan →",
    "explore.styles.title": "Model Potongan",
    "explore.styles.desc": "Slick back, pompadour, side part, dan gaya American gangster lainnya.",
    "explore.styles.link": "Lihat Model →",
    "explore.barbers.title": "Barber Kami",
    "explore.barbers.desc": "Kenali barber berpengalaman yang siap merapikan gayamu.",
    "explore.barbers.link": "Kenali Barber →",
    "explore.contact.title": "Lokasi & Jam Buka",
    "explore.contact.desc": "Temukan alamat, peta, dan jam operasional kami.",
    "explore.contact.link": "Lihat Lokasi →",

    "services.title": "Layanan & Harga",
    "services.note": "Semua layanan sudah termasuk konsultasi gaya dan styling produk premium.",
    "barbers.eyebrow": "Tim Kami",
    "barbers.title": "Kenali Barber Kami",
    "barbers.note": "Sebutkan barber favoritmu saat booking via WhatsApp.",
    "styles.title": "Model Potongan American Gangster",
    "styles.note": "Pilih gaya favoritmu, lalu klik \"Booking Model Ini\" untuk langsung chat via WhatsApp.",
    "contact.eyebrow": "Kunjungi Kami",
    "contact.title": "Lokasi & Jam Buka",
    "contact.getInTouch": "Hubungi Kami",

    "footer.rights": "Semua hak dilindungi.",

    // teks yang dibuat oleh script.js
    "ui.minutes": "menit",
    "ui.experience": (n) => `Pengalaman ${n} tahun`,
    "ui.bookStyle": "Booking Model Ini",
    "ui.photoSoon": "Foto segera hadir",
    "ui.closed": "Tutup",
    "ui.days": ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    "ui.menu": "Buka menu",
    "wa.ask": (shop) => `Halo ${shop}, saya mau tanya.`,
    "wa.book": (shop) => `Halo ${shop}, saya mau booking potong rambut.`,
    "wa.bookStyle": (shop, style) => `Halo ${shop}, saya mau booking potong rambut model ${style}.`,

    // judul tab browser per halaman
    "title.index": "Barbershop Chicano di Bali",
    "title.layanan": "Layanan & Harga",
    "title.barber": "Barber Kami",
    "title.model": "Model Potongan",
    "title.kontak": "Lokasi & Kontak",
  },

  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.barbers": "Barbers",
    "nav.styles": "Styles",
    "nav.contact": "Contact",
    "nav.book": "Book Now",

    "hero.book": "Book Now",
    "hero.services": "View Services",
    "hero.years": "Years Open",
    "hero.clients": "Happy Clients",
    "hero.rating": "Google Rating",

    "promo.title": "This Month's Promo",
    "promo.cta": "Claim Promo",
    "marquee.label": "Haircut styles",

    "explore.title": "Explore Our Barbershop",
    "explore.services.title": "Services & Prices",
    "explore.services.desc": "Haircuts, shaves, coloring, hair tattoos and more.",
    "explore.services.link": "View Services →",
    "explore.styles.title": "Haircut Styles",
    "explore.styles.desc": "Slick back, pompadour, side part and other American gangster styles.",
    "explore.styles.link": "View Styles →",
    "explore.barbers.title": "Our Barbers",
    "explore.barbers.desc": "Meet the experienced barbers ready to sharpen your look.",
    "explore.barbers.link": "Meet the Barbers →",
    "explore.contact.title": "Location & Hours",
    "explore.contact.desc": "Find our address, map and opening hours.",
    "explore.contact.link": "View Location →",

    "services.title": "Services & Prices",
    "services.note": "Every service includes a style consultation and premium product styling.",
    "barbers.eyebrow": "Our Team",
    "barbers.title": "Meet Our Barbers",
    "barbers.note": "Mention your favorite barber when you book via WhatsApp.",
    "styles.title": "American Gangster Haircuts",
    "styles.note": "Pick your favorite style, then tap \"Book This Style\" to chat with us on WhatsApp.",
    "contact.eyebrow": "Visit Us",
    "contact.title": "Location & Hours",
    "contact.getInTouch": "Get in Touch",

    "footer.rights": "All rights reserved.",

    "ui.minutes": "min",
    "ui.experience": (n) => `${n} years of experience`,
    "ui.bookStyle": "Book This Style",
    "ui.photoSoon": "Photo coming soon",
    "ui.closed": "Closed",
    "ui.days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "ui.menu": "Open menu",
    "wa.ask": (shop) => `Hi ${shop}, I have a question.`,
    "wa.book": (shop) => `Hi ${shop}, I'd like to book a haircut.`,
    "wa.bookStyle": (shop, style) => `Hi ${shop}, I'd like to book a ${style} haircut.`,

    "title.index": "Chicano Barbershop in Bali",
    "title.layanan": "Services & Prices",
    "title.barber": "Our Barbers",
    "title.model": "Haircut Styles",
    "title.kontak": "Location & Contact",
  },
};
