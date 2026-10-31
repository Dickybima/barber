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

/* ---------- Layanan ---------- */
$("#servicesGrid").innerHTML = SERVICES.map((s) => `
  <article class="service-card">
    <div class="service-icon">${s.icon}</div>
    <h3>${esc(s.name)}</h3>
    <p class="muted">${esc(s.desc)}</p>
    <div class="service-meta">
      <span class="price">${rupiah(s.price)}</span>
      <span class="duration">⏱ ${esc(s.duration)}</span>
    </div>
  </article>`).join("");

/* ---------- Barber ---------- */
$("#barbersGrid").innerHTML = BARBERS.map((b) => `
  <article class="barber-card">
    <div class="barber-photo"><img src="${esc(b.photo)}" alt="${esc(b.name)}" loading="lazy" onerror="this.style.visibility='hidden'" /></div>
    <div class="barber-body">
      <h3>${esc(b.name)}</h3>
      <p class="gold">${esc(b.role)}</p>
      <p class="muted">Pengalaman ${esc(b.exp)} · ${esc(b.specialty)}</p>
    </div>
  </article>`).join("");

/* ---------- Galeri + lightbox ---------- */
$("#galleryGrid").innerHTML = GALLERY.map((g, i) => `
  <figure class="gallery-item" data-index="${i}">
    <img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy" onerror="this.style.visibility='hidden'" />
    <figcaption>${esc(g.caption)}</figcaption>
  </figure>`).join("");

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `<button aria-label="Tutup">&times;</button><img alt="" /><p></p>`;
document.body.appendChild(lightbox);
$("#galleryGrid").addEventListener("click", (e) => {
  const item = e.target.closest(".gallery-item");
  if (!item) return;
  const g = GALLERY[item.dataset.index];
  lightbox.querySelector("img").src = g.src;
  lightbox.querySelector("p").textContent = g.caption;
  lightbox.classList.add("open");
});
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightbox.querySelector("img")) lightbox.classList.remove("open");
});
document.addEventListener("keydown", (e) => e.key === "Escape" && lightbox.classList.remove("open"));

/* ---------- Testimoni ---------- */
$("#testiGrid").innerHTML = TESTIMONIALS.map((t) => `
  <blockquote class="testi-card">
    <div class="stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
    <p>“${esc(t.text)}”</p>
    <cite>— ${esc(t.name)}</cite>
  </blockquote>`).join("");

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
document.querySelectorAll(".section-head, .service-card, .barber-card, .gallery-item, .testi-card, .contact-info, .map")
  .forEach((el) => { el.classList.add("reveal"); io.observe(el); });
