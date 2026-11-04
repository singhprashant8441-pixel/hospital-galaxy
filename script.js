/* =====================================================================
   SR GALAXY HOSPITAL: script.js
   ---------------------------------------------------------------------
   PART 1 (below) is the ONLY part you normally need to edit.
   Change text, phone numbers, address, photos and colours here, save,
   and refresh the browser. No other code needs touching.
   ===================================================================== */

/* ============================ EDIT HERE ============================ */
const SITE_CONFIG = {

  /* ---- COLOURS (change the hex codes to restyle the whole site) ---- */
  colors: {
    background:  "#FFFFFF",   // main page background
    background2: "#EAF5FC",   // alternate section background
    heading:     "#245477",   // headings
    accent:      "#24A69A",   // buttons, icons, highlights
    mint:        "#D9F1EC",   // soft highlight areas
    text:        "#526575",   // body text
    footer:      "#173B54"    // footer background
  },

  /* ---- HOSPITAL DETAILS ---- */
  hospital: {
    name: "SR Galaxy Hospital",
    tagline: "Lucknow",
    logo: "assets/logo.png",                 // replace this file with your original logo
    countryCode: "+91",                      // used for click-to-call links
    phones: ["9161488999", "8467890270"],    // add or remove numbers here
    addressDisplay: "Jagat Khera Road, Kalli Paschim, Near SGPGI, Lucknow.",
    addressForMaps: "SR Galaxy Hospital, Jagat Khera Road, Kalli Paschim, Near SGPGI, Lucknow, Uttar Pradesh",
    /* Google Maps embed: open Google Maps > search your hospital > Share > Embed a map >
       copy ONLY the URL inside src="..." and paste it between the quotes. Leave "" to show a placeholder. */
    mapEmbedUrl: ""
  },

  /* ---- HERO (top of homepage) ---- */
  hero: {
    eyebrow: "Near SGPGI, Lucknow",
    headline: "Compassionate Care. Better Health. Brighter Tomorrow.",
    subtext: "Committed to patient care, advanced medical facilities and a healthier community.",
    intro: "SR Galaxy Hospital is a patient-first hospital in Lucknow, offering critical-care facilities close to SGPGI.",
    image: "assets/hero.jpg",                // your main hospital photo
    imageAlt: "SR Galaxy Hospital reception with illuminated logo"
  },

  /* ---- ABOUT ---- */
  about: {
    title: "About SR Galaxy Hospital",
    paragraphs: [
      "SR Galaxy Hospital is located on Jagat Khera Road, Kalli Paschim, near SGPGI in Lucknow. The hospital is led by its Director, Dr. Rakesh Singh Rajput.",
      "We put the patient and their family first: clear communication, respectful care and a calm environment. Our aim is to make dependable healthcare accessible to the community.",
      "The hospital has ICU, NICU, HDU, ventilator, C-Arm and dialysis facilities. Please call us to talk about your needs."
    ]
  },

  /* ---- FACILITIES (icon options: icu, nicu, hdu, ventilator, carm, dialysis) ----
     Only describe services you can confirm. */
  facilitiesSection: {
    title: "Critical-care facilities under one roof",
    intro: "Please call the hospital to confirm availability and details for your situation."
  },
  facilities: [
    { icon: "icu",        title: "ICU",                 description: "Intensive Care Unit for patients who need close, continuous monitoring and critical care." },
    { icon: "nicu",       title: "NICU",                description: "Neonatal Intensive Care Unit for newborns who need specialised attention." },
    { icon: "hdu",        title: "HDU",                 description: "High Dependency Unit for patients who need more monitoring than a general ward." },
    { icon: "ventilator", title: "Ventilator Support",  description: "Ventilator facility for patients who need help with breathing." },
    { icon: "carm",       title: "C-Arm",               description: "C-Arm imaging equipment used for real-time X-ray imaging during procedures." },
    { icon: "dialysis",   title: "Dialysis",            description: "Dialysis facility for patients who need kidney-related treatment support." }
  ],

  /* ---- DIRECTOR ---- */
  director: {
    name: "Dr. Rakesh Singh Rajput",
    title: "Director, SR Galaxy Hospital",
    photo: "assets/director.jpg",
    photoAlt: "Dr. Rakesh Singh Rajput, Director of SR Galaxy Hospital",
    message: [
      "Welcome to SR Galaxy Hospital. When a family comes to us, they are often worried, and our first duty is to treat them with respect, patience and honesty.",
      "Our team works to give every patient attentive, comfortable care, supported by the critical-care facilities we have built here. Your trust is what motivates us, and we are committed to earning it every day."
    ]
  },

  /* ---- WHY CHOOSE US (icon options: heart, users, layers, smile, pin) ---- */
  why: [
    { icon: "heart",  title: "Patient-focused approach",       text: "Every decision starts with what is best for the patient and their family." },
    { icon: "users",  title: "Dedicated healthcare team",      text: "A committed team that works together to look after patients." },
    { icon: "layers", title: "Multiple critical-care facilities", text: "ICU, NICU, HDU, ventilator, C-Arm and dialysis available at one hospital." },
    { icon: "smile",  title: "Focus on patient comfort",       text: "A calm, respectful environment for patients and their families." },
    { icon: "pin",    title: "Convenient location",            text: "Easy to reach on Jagat Khera Road, near SGPGI, Lucknow." }
  ],

  /* ---- GALLERY: put your photos in the assets folder and change the file names ---- */
  gallery: [
    { src: "assets/reception-front.jpg", alt: "SR Galaxy Hospital reception with illuminated logo", label: "Reception" },
    { src: "assets/ward.jpg",            alt: "Patient ward with beds and bedside monitors",        label: "Patient Ward" },
    { src: "assets/reception.jpg",       alt: "Reception and waiting area",                         label: "Reception Area" },
    { src: "assets/patient-room.jpg",    alt: "Ward with patient beds and curtains",                label: "Patient Beds" },
    { src: "assets/equipment.jpg",       alt: "Bedside patient monitors and medical gas panels",    label: "Bedside Monitoring" },
    { src: "assets/patient-beds.jpg",    alt: "Adjustable hospital beds",                           label: "Hospital Beds" }
  ],


  /* ---- FORMS ---- */
  forms: {
    departments: ["General Enquiry", "ICU", "NICU", "HDU", "Ventilator Support", "C-Arm", "Dialysis"],
    /* BACKEND: paste your form service URL here (for example a Formspree / Google Apps Script / your own server URL).
       While this is "", forms are NOT sent anywhere and visitors are asked to call the hospital. */
    appointmentEndpoint: "",
    contactEndpoint: ""
  },

  /* ---- FOOTER ---- */
  footer: {
    blurb: "Compassionate care, close to SGPGI, Lucknow.",
    privacyText: "Privacy policy placeholder. Add your policy text here before launching the website."
  }
};
/* ========================== END OF EDIT AREA ========================== */


/* =====================================================================
   PART 2: SITE CODE (you do not need to edit below this line)
   ===================================================================== */

const ICONS = {
  phone:      '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  pin:        '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  icu:        '<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-6v5"/><circle cx="7.5" cy="11" r="1.7"/>',
  nicu:       '<rect x="3" y="8" width="18" height="10" rx="3"/><circle cx="9" cy="13" r="2"/><path d="M13 13h4M6 18v2M18 18v2M8 8V5h8v3"/>',
  hdu:        '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M6 10h3l1.5-3 3 6 1.5-3H18M9 20h6M12 16v4"/>',
  ventilator: '<path d="M12 3v8"/><path d="M12 9c0-3-1.5-5-3.5-4.5S4 9 4 13c0 3 1 5 3 5 2.5 0 5-1.5 5-4"/><path d="M12 9c0-3 1.5-5 3.5-4.5S20 9 20 13c0 3-1 5-3 5-2.5 0-5-1.5-5-4"/>',
  carm:       '<path d="M17 4.5A8 8 0 1 0 17 19.5"/><rect x="14.5" y="2" width="5" height="3.5" rx="1"/><rect x="14.5" y="18.5" width="5" height="3.5" rx="1"/>',
  dialysis:   '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/>',
  heart:      '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  users:      '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.3"/><path d="M17 14c2.5 0 4.5 2 4.5 4.5"/>',
  layers:     '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  smile:      '<circle cx="12" cy="12" r="9"/><path d="M8 14c1 1.5 2.5 2.2 4 2.2s3-.7 4-2.2M9 9.5h.01M15 9.5h.01"/>',
  user:       '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>',
  image:      '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-8 8"/>',
  cross:      '<path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z"/>'
};

function iconSvg(name, cls) {
  return '<svg class="' + (cls || "ico") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
         'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
         (ICONS[name] || ICONS.cross) + '</svg>';
}

/* small helpers */
function getPath(obj, path) {
  return path.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, obj);
}
function el(tag, cls, html) {
  var n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}
function telHref(num) {
  return "tel:" + SITE_CONFIG.hospital.countryCode + String(num).replace(/\D/g, "");
}

/* Picture with a friendly placeholder if the file is missing */
function pictureWithFallback(src, alt, label, iconName) {
  var wrap = el("div", "pic");
  var ph = el("div", "pic-placeholder",
    iconSvg(iconName || "image", "ico ico-lg") +
    "<span>" + escapeHtml(label) + "</span><small>Add photo: " + escapeHtml(src) + "</small>");
  var img = new Image();
  img.alt = alt;
  img.decoding = "async";
  img.onload = function () { wrap.innerHTML = ""; wrap.appendChild(img); };
  img.onerror = function () { /* keep placeholder */ };
  wrap.appendChild(ph);
  img.src = src;
  return wrap;
}

/* ---------------- Apply configuration to the page ---------------- */
function applyColors() {
  var c = SITE_CONFIG.colors, r = document.documentElement.style;
  r.setProperty("--bg", c.background);
  r.setProperty("--bg-alt", c.background2);
  r.setProperty("--heading", c.heading);
  r.setProperty("--accent", c.accent);
  r.setProperty("--mint", c.mint);
  r.setProperty("--text", c.text);
  r.setProperty("--footer", c.footer);
}

function applyText() {
  document.querySelectorAll("[data-bind]").forEach(function (n) {
    var v = getPath(SITE_CONFIG, n.getAttribute("data-bind"));
    if (typeof v === "string" && v) n.textContent = v;
  });
  document.querySelectorAll("img.js-logo").forEach(function (i) { i.src = SITE_CONFIG.hospital.logo; });
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  document.querySelectorAll("[data-icon]").forEach(function (s) {
    s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("fill", "none");
    s.setAttribute("stroke", "currentColor");
    s.setAttribute("stroke-width", "1.7");
    s.setAttribute("stroke-linecap", "round");
    s.setAttribute("stroke-linejoin", "round");
    s.innerHTML = ICONS[s.getAttribute("data-icon")] || "";
  });
}

function applyContacts() {
  var h = SITE_CONFIG.hospital;
  document.querySelectorAll(".js-phone-list").forEach(function (box) {
    box.innerHTML = h.phones.map(function (p) {
      return '<a href="' + telHref(p) + '">' + iconSvg("phone", "ico ico-sm") + escapeHtml(p) + "</a>";
    }).join("");
  });
  document.querySelectorAll(".js-call-primary").forEach(function (a) { a.href = telHref(h.phones[0]); });
  var mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(h.addressForMaps);
  document.querySelectorAll(".js-maps-link").forEach(function (a) { a.href = mapsUrl; });

  var box = document.getElementById("mapBox");
  if (h.mapEmbedUrl) {
    box.innerHTML = '<iframe title="Map showing ' + escapeHtml(h.name) + '" src="' + escapeHtml(h.mapEmbedUrl) +
      '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';
  } else {
    box.innerHTML = '<div class="map-placeholder">' + iconSvg("pin", "ico ico-lg") +
      "<p>Map placeholder</p><a class='btn btn-outline btn-sm' target='_blank' rel='noopener' href='" + mapsUrl + "'>View on Google Maps</a></div>";
  }
}

function renderSections() {
  var C = SITE_CONFIG;

  document.getElementById("heroVisual").appendChild(
    pictureWithFallback(C.hero.image, C.hero.imageAlt, "Hospital photograph", "cross"));

  var about = document.getElementById("aboutBody");
  C.about.paragraphs.forEach(function (t) { about.appendChild(el("p", "", escapeHtml(t))); });

  var fg = document.getElementById("facilitiesGrid");
  C.facilities.forEach(function (f) {
    fg.appendChild(el("article", "card facility-card",
      '<div class="icon-badge">' + iconSvg(f.icon, "ico ico-lg") + "</div>" +
      "<h3>" + escapeHtml(f.title) + "</h3><p>" + escapeHtml(f.description) + "</p>"));
  });

  document.getElementById("directorPhoto").appendChild(
    pictureWithFallback(C.director.photo, C.director.photoAlt, "Director's photograph", "user"));
  var dm = document.getElementById("directorMessage");
  C.director.message.forEach(function (t) { dm.appendChild(el("p", "", escapeHtml(t))); });

  var wg = document.getElementById("whyGrid");
  C.why.forEach(function (w) {
    wg.appendChild(el("div", "why-item",
      '<div class="icon-badge small">' + iconSvg(w.icon) + "</div>" +
      "<div><h3>" + escapeHtml(w.title) + "</h3><p>" + escapeHtml(w.text) + "</p></div>"));
  });

  var gg = document.getElementById("galleryGrid");
  C.gallery.forEach(function (g) {
    var fig = el("figure", "gallery-item");
    fig.appendChild(pictureWithFallback(g.src, g.alt, g.label));
    fig.appendChild(el("figcaption", "", escapeHtml(g.label)));
    gg.appendChild(fig);
  });

  var sel = document.getElementById("apDept");
  sel.innerHTML = '<option value="">Select...</option>' +
    C.forms.departments.map(function (d) { return "<option>" + escapeHtml(d) + "</option>"; }).join("");
}

/* ---------------- Navigation ---------------- */
function setupNav() {
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");
  function close() {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }
  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

  var dlg = document.getElementById("privacyDialog");
  document.getElementById("privacyLink").addEventListener("click", function (e) {
    e.preventDefault();
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
  });
  document.getElementById("privacyClose").addEventListener("click", function () { dlg.close(); });
}

/* ---------------- Forms ---------------- */
function validMobile(v) {
  var d = v.replace(/[\s-]/g, "").replace(/^(\+91|91|0)/, "");
  return /^[6-9]\d{9}$/.test(d);
}

function setupForm(formId, statusId, fields, endpointKey, successText) {
  var form = document.getElementById(formId);
  var status = document.getElementById(statusId);

  function showError(id, msg) {
    var span = form.querySelector('[data-error-for="' + id + '"]');
    var input = document.getElementById(id);
    if (span) span.textContent = msg || "";
    if (input) input.classList.toggle("invalid", !!msg);
  }

  function validate() {
    var ok = true;
    fields.forEach(function (f) {
      var input = document.getElementById(f.id);
      var v = input.value.trim();
      var msg = "";
      if (f.required && !v) msg = "This field is required.";
      else if (v && f.type === "name" && v.length < 2) msg = "Please enter a valid name.";
      else if (v && f.type === "mobile" && !validMobile(v)) msg = "Enter a valid 10-digit mobile number.";
      else if (v && f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg = "Enter a valid email address.";
      else if (v && f.type === "date") {
        var today = new Date(); today.setHours(0, 0, 0, 0);
        if (new Date(v + "T00:00:00") < today) msg = "Please choose today or a future date.";
      }
      showError(f.id, msg);
      if (msg) ok = false;
    });
    return ok;
  }

  fields.forEach(function (f) {
    document.getElementById(f.id).addEventListener("input", function () { showError(f.id, ""); });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.className = "form-status";
    status.textContent = "";
    if (!validate()) {
      status.classList.add("is-error");
      status.textContent = "Please correct the highlighted fields.";
      var first = form.querySelector(".invalid");
      if (first) first.focus();
      return;
    }

    var endpoint = form.getAttribute("data-endpoint") || SITE_CONFIG.forms[endpointKey] || "";
    var phone = SITE_CONFIG.hospital.phones[0];

    /* No backend connected yet: be honest, do not pretend anything was sent. */
    if (!endpoint) {
      status.classList.add("is-warn");
      status.innerHTML = "Thank you. This website is not yet connected to the hospital's booking system, so your details have <strong>not been sent</strong>. " +
        'Please call <a href="' + telHref(phone) + '">' + escapeHtml(phone) + "</a> to request your appointment.";
      return;
    }

    var data = {};
    new FormData(form).forEach(function (v, k) { data[k] = v; });
    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    }).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      form.reset();
      status.classList.add("is-ok");
      status.textContent = successText;
    }).catch(function () {
      status.classList.add("is-error");
      status.innerHTML = 'We could not send your request. Please call <a href="' + telHref(phone) + '">' + escapeHtml(phone) + "</a>.";
    }).then(function () { btn.disabled = false; });
  });
}

/* ---------------- Start ---------------- */
document.addEventListener("DOMContentLoaded", function () {
  applyColors();
  applyText();
  applyContacts();
  renderSections();
  setupNav();

  var dateInput = document.getElementById("apDate");
  var t = new Date();
  dateInput.min = t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");

  setupForm("appointmentForm", "appointmentStatus", [
    { id: "apName",  required: true,  type: "name" },
    { id: "apPhone", required: true,  type: "mobile" },
    { id: "apEmail", required: false, type: "email" },
    { id: "apDate",  required: true,  type: "date" },
    { id: "apDept",  required: true }
  ], "appointmentEndpoint",
  "Your request has been received. This is NOT a confirmed appointment: the hospital will contact you to confirm.");

  setupForm("contactForm", "contactStatus", [
    { id: "ctName",  required: true, type: "name" },
    { id: "ctPhone", required: true, type: "mobile" },
    { id: "ctMsg",   required: true }
  ], "contactEndpoint",
  "Thank you. Your message has been received and the hospital will get back to you.");
});
