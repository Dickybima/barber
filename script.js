/* Logika website — umumnya tidak perlu diubah. Edit data di data.js */

const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- Isi data toko ---------- */
document.querySelectorAll("[data-shop-name]").forEach((el) => (el.textContent = SHOP.name));
$("[data-since]").textContent = SHOP.since;
$("[data-tagline]").textContent = SHOP.tagline;
$("[data-promo]").textContent = SHOP.promo;
$("[data-address]").textContent = SHOP.address;
$("[data-phone]").textContent = SHOP.phoneDisplay;
$("[data-phone-link]").href = "tel:+" + SHOP.whatsapp;
$("[data-instagram]").textContent = "@" + SHOP.instagram;
$("[data-instagram-link]").href = "https://instagram.com/" + SHOP.instagram;
$("#waFloat").href = `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent("Halo " + SHOP.name + ", saya mau tanya.")}`;
document.querySelectorAll("[data-wa]").forEach((a) =>
  (a.href = `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent("Halo " + SHOP.name + ", saya mau booking potong rambut.")}`));
$("#mapFrame").src = "https://maps.google.com/maps?q=" + encodeURIComponent(SHOP.mapQuery) + "&output=embed";
$("#year").textContent = new Date().getFullYear();
document.title = SHOP.name + " Barbershop";

/* ---------- Ikon layanan (SVG garis) ---------- */
const ICONS = {
  scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>',
  crown: '<path d="M2 6l3.5 11h13L22 6l-5.5 5L12 4l-4.5 7z"/><path d="M5.5 20h13"/>',
  razor: '<rect x="4" y="3" width="16" height="5" rx="1.5"/><path d="M7 5.5h10"/><path d="M12 8v8"/><rect x="10.5" y="16" width="3" height="5.5" rx="1"/>',
  palette: '<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2z"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  kid: '<circle cx="12" cy="13" r="8"/><path d="M12 5c0-1.5 1-2.5 2.5-2.5"/><path d="M9 12h.01M15 12h.01"/><path d="M9.5 16a3.5 3.5 0 0 0 5 0"/>',
  comb: '<rect x="3" y="4" width="18" height="5" rx="1.5"/><path d="M5 9v10M8 9v8M11 9v10M14 9v8M17 9v10M20 9v6"/>',
  spray: '<rect x="7" y="9" width="8" height="13" rx="2"/><path d="M9 9V6h4v3"/><path d="M13 6h3"/><path d="M19 3v.01M21 5v.01M19 7v.01"/>',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.scissors}</svg>`;

/* ---------- Layanan ---------- */
$("#servicesGrid").innerHTML = SERVICES.map((s) => `
  <article class="service-card">
    <div class="service-icon">${icon(s.icon)}</div>
    <h3>${esc(s.name)}</h3>
    <p class="muted">${esc(s.desc)}</p>
    <div class="service-meta">
      <span class="price">${rupiah(s.price)}</span>
      <span class="duration"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>${esc(s.duration)}</span>
    </div>
  </article>`).join("");

/* ---------- Barber ---------- */
$("#barbersGrid").innerHTML = BARBERS.map((b) => `
  <article class="barber-card">
    <div class="barber-photo"><img src="${esc(b.photo)}" alt="${esc(b.name)}" loading="lazy" onerror="this.style.visibility='hidden'" /></div>
    <div class="barber-body">
      <h3>${esc(b.name)}</h3>
      <p class="accent">${esc(b.role)}</p>
      <p class="muted">Pengalaman ${esc(b.exp)} · ${esc(b.specialty)}</p>
    </div>
  </article>`).join("");

/* ---------- Model potongan + lightbox ---------- */
const waLink = (text) => `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;
$("#stylesGrid").innerHTML = STYLES.map((m, i) => `
  <article class="style-card">
    <figure class="style-photo" data-index="${i}">
      <img src="${esc(m.photo)}" alt="Model potongan ${esc(m.name)}" loading="lazy" onerror="this.parentNode.classList.add('noimg')" />
      <span class="style-fallback">Foto segera hadir</span>
      <span class="style-num">No. ${String(i + 1).padStart(2, "0")}</span>
    </figure>
    <div class="style-body">
      <p class="style-era">${esc(m.era)}</p>
      <h3>${esc(m.name)}</h3>
      <p class="muted">${esc(m.desc)}</p>
      <a class="btn btn-outline btn-sm" target="_blank" rel="noopener"
         href="${waLink(`Halo ${SHOP.name}, saya mau booking potong rambut model ${m.name}.`)}">Booking Model Ini</a>
    </div>
  </article>`).join("");

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `<button aria-label="Tutup">&times;</button><img alt="" /><p></p>`;
document.body.appendChild(lightbox);
$("#stylesGrid").addEventListener("click", (e) => {
  const item = e.target.closest(".style-photo");
  if (!item || item.classList.contains("noimg")) return;
  const m = STYLES[item.dataset.index];
  lightbox.querySelector("img").src = m.photo;
  lightbox.querySelector("p").textContent = m.name;
  lightbox.classList.add("open");
});
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightbox.querySelector("img")) lightbox.classList.remove("open");
});
document.addEventListener("keydown", (e) => e.key === "Escape" && lightbox.classList.remove("open"));

/* ---------- Jam buka ---------- */
const todayIdx = (new Date().getDay() + 6) % 7; // Senin = 0
$("#hoursTable").innerHTML = SHOP.hours.map((h, i) => `
  <tr class="${i === todayIdx ? "today" : ""}">
    <td>${esc(h.day)}</td>
    <td>${h.open ? `${esc(h.open)} – ${esc(h.close)}` : "Tutup"}</td>
  </tr>`).join("");

/* ---------- Navbar ---------- */
const navbar = $("#navbar");
const navLinks = $("#navLinks");
const hamburger = $("#hamburger");
window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 40));
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  hamburger.classList.remove("active");
}));

/* ---------- Animasi muncul saat scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".section-head, .service-card, .barber-card, .style-card, .contact-info, .map")
  .forEach((el) => { el.classList.add("reveal"); io.observe(el); });
