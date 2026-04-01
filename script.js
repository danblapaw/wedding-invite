'use strict';

/* ============================================================
   SLIDESHOW CONFIGURATION
   ——————————————————————————————————————————————————————————
   Place your venue photos in an /assets/ folder at the
   project root, then list the filenames here.

   Recommended: 3–5 landscape photos, at least 1400px wide.
   Supported formats: .jpg, .jpeg, .webp, .png

   Example filenames:
     assets/venue-1.jpg
     assets/venue-2.jpg
     assets/venue-3.jpg

   To disable the slideshow entirely, leave the array empty: []
   ============================================================ */
const SLIDESHOW_IMAGES = [
  'assets/venue-1.jpg',
  'assets/venue-2.jpg',
  'assets/venue-3.jpg',
];

/* Milliseconds each photo stays visible before crossfading to the next */
const SLIDESHOW_INTERVAL_MS = 3500;

/* ============================================================
   TRANSLATIONS
   To add/edit content, update the objects below.
   Keys map to [data-i18n="key"] attributes in the HTML.
   ============================================================ */

const TRANSLATIONS = {
  es: {
    hero: {
      eyebrow: 'Boda · 11 de Octubre de 2026',
    },
    countdown: {
      label:   'Hasta el gran día',
      title:   'Cuenta Atrás',
      days:    'Días',
      hours:   'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos',
    },
    program: {
      label:  'La Celebración',
      title:  'El Día',
      events: [
        { time: '15:30', name: 'Llegada de los invitados' },
        { time: '16:00', name: 'Ceremonia' },
        { time: '17:00', name: 'Aperitivo', desc: '17:00 – 19:00' },
        { time: '19:00', name: 'Sesión de fotos', desc: '19:00 – 19:30' },
        { time: '20:00', name: 'Cena' },
        { time: '22:00', name: 'Celebración' },
      ],
    },
    location: {
      label:      'El Lugar',
      title:      'Dónde nos casamos',
      address:    'Barcelona, España',
      directions: 'Ver en Google Maps',
    },
    accommodation: {
      label: 'Alojamiento',
      title: 'Dónde dormir',
      body:  'Próximamente compartiremos una selección de alojamientos cercanos al lugar de celebración para que podáis elegir la opción que mejor se adapte a vuestras necesidades.',
    },
    transport: {
      label: 'Transporte',
      title: 'Cómo llegar',
      body:  'Próximamente os informaremos sobre las opciones de transporte disponibles para llegar al lugar de la boda y regresar cómodamente.',
    },
    faq: {
      label: 'Preguntas',
      title: 'Preguntas Frecuentes',
      items: [
        {
          q: '¿Cuál es el código de vestimenta?',
          a: 'Próximamente compartiremos todos los detalles sobre el código de vestimenta.',
        },
        {
          q: '¿Puedo traer a mis hijos?',
          a: 'Próximamente os informaremos sobre la política de niños en la celebración.',
        },
        {
          q: '¿Habrá opciones para alergias o intolerancias?',
          a: 'Por supuesto. Al confirmar vuestra asistencia, podréis indicarnos cualquier restricción alimentaria.',
        },
        {
          q: '¿Cómo confirmo mi asistencia?',
          a: 'Próximamente os enviaremos todos los detalles para confirmar vuestra asistencia.',
        },
      ],
    },
  },

  de: {
    hero: {
      eyebrow: 'Hochzeit · 11. Oktober 2026',
    },
    countdown: {
      label:   'Bis zum großen Tag',
      title:   'Countdown',
      days:    'Tage',
      hours:   'Stunden',
      minutes: 'Minuten',
      seconds: 'Sekunden',
    },
    program: {
      label:  'Die Feier',
      title:  'Der Tag',
      events: [
        { time: '15:30', name: 'Ankunft der Gäste' },
        { time: '16:00', name: 'Zeremonie' },
        { time: '17:00', name: 'Aperitif', desc: '17:00 – 19:00 Uhr' },
        { time: '19:00', name: 'Fotoaufnahmen', desc: '19:00 – 19:30 Uhr' },
        { time: '20:00', name: 'Abendessen' },
        { time: '22:00', name: 'Feier' },
      ],
    },
    location: {
      label:      'Der Ort',
      title:      'Wo wir heiraten',
      address:    'Barcelona, Spanien',
      directions: 'In Google Maps anzeigen',
    },
    accommodation: {
      label: 'Unterkunft',
      title: 'Übernachtung',
      body:  'Wir werden in Kürze eine Auswahl an Unterkünften in der Nähe der Veranstaltungslocation bereitstellen.',
    },
    transport: {
      label: 'Anreise',
      title: 'Wie man anreist',
      body:  'Informationen zu den Transportmöglichkeiten zur Hochzeitslocation werden in Kürze bekannt gegeben.',
    },
    faq: {
      label: 'Fragen',
      title: 'Häufige Fragen',
      items: [
        {
          q: 'Welchen Dresscode gibt es?',
          a: 'Details zum Dresscode werden in Kürze bekannt gegeben.',
        },
        {
          q: 'Darf ich meine Kinder mitbringen?',
          a: 'Informationen zur Kinderregelung folgen in Kürze.',
        },
        {
          q: 'Gibt es Optionen für Allergiker?',
          a: 'Selbstverständlich. Bitte teilt uns beim Zusagen alle Ernährungseinschränkungen mit.',
        },
        {
          q: 'Wie kann ich zusagen?',
          a: 'Die Informationen zur Rückmeldung werden in Kürze zugeschickt.',
        },
      ],
    },
  },

  tr: {
    hero: {
      eyebrow: 'Düğün · 11 Ekim 2026',
    },
    countdown: {
      label:   'O Büyük Güne Kadar',
      title:   'Geri Sayım',
      days:    'Gün',
      hours:   'Saat',
      minutes: 'Dakika',
      seconds: 'Saniye',
    },
    program: {
      label:  'Kutlama',
      title:  'O Gün',
      events: [
        { time: '15:30', name: 'Misafirlerin Gelişi' },
        { time: '16:00', name: 'Tören' },
        { time: '17:00', name: 'Aperitif', desc: '17:00 – 19:00' },
        { time: '19:00', name: 'Fotoğraf Çekimi', desc: '19:00 – 19:30' },
        { time: '20:00', name: 'Akşam Yemeği' },
        { time: '22:00', name: 'Kutlama' },
      ],
    },
    location: {
      label:      'Mekan',
      title:      'Nerede Evleniyoruz',
      address:    'Barselona, İspanya',
      directions: 'Google Maps\'te Görüntüle',
    },
    accommodation: {
      label: 'Konaklama',
      title: 'Nerede Kalınır',
      body:  'Yakın zamanda düğün mekanına yakın konaklama seçenekleri paylaşacağız.',
    },
    transport: {
      label: 'Ulaşım',
      title: 'Nasıl Gelinir',
      body:  'Düğün mekanına ulaşım seçenekleri hakkında bilgiler yakında paylaşılacaktır.',
    },
    faq: {
      label: 'Sorular',
      title: 'Sık Sorulan Sorular',
      items: [
        {
          q: 'Kıyafet kodu nedir?',
          a: 'Kıyafet kodu detayları yakında paylaşılacaktır.',
        },
        {
          q: 'Çocuklarımı getirebilir miyim?',
          a: 'Çocuklara ilişkin bilgiler yakında paylaşılacaktır.',
        },
        {
          q: 'Alerji durumunda menü seçeneği var mı?',
          a: 'Elbette. Katılım onayınızda diyet kısıtlamalarınızı belirtebilirsiniz.',
        },
        {
          q: 'Katılımımı nasıl onaylayabilirim?',
          a: 'Katılım onayına dair bilgiler yakında paylaşılacaktır.',
        },
      ],
    },
  },
};

/* ============================================================
   STATE
   ============================================================ */
let currentLang = 'es';
let countdownTimer = null;

/* ============================================================
   HELPERS
   ============================================================ */

/** Safely read a dot-separated key path from an object */
function get(obj, path) {
  return path.split('.').reduce((acc, k) => acc?.[k], obj);
}

/** Zero-pad a number to at least `n` digits */
function pad(num, n = 2) {
  return String(num).padStart(n, '0');
}

/* ============================================================
   TRANSLATIONS — apply to DOM
   ============================================================ */
function applyTranslations(lang) {
  const tr = TRANSLATIONS[lang];

  // Update all [data-i18n] text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = get(tr, el.dataset.i18n);
    if (typeof val === 'string') el.textContent = val;
  });

  // Rebuild dynamically-generated sections
  buildTimeline(lang);
  buildFaq(lang);

  // HTML lang attribute
  document.documentElement.lang = lang;

  // Active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

/* ============================================================
   TIMELINE — build from translation data
   ============================================================ */
function buildTimeline(lang) {
  const container = document.getElementById('timeline');
  if (!container) return;

  const events = TRANSLATIONS[lang].program.events;

  container.innerHTML = events.map((ev, i) => `
    <div class="timeline-item fade-in" role="listitem" style="transition-delay:${i * 0.08}s">
      <div class="tl-time">${ev.time}</div>
      <div class="tl-axis">
        <div class="tl-dot"></div>
      </div>
      <div class="tl-body">
        <p class="tl-name">${ev.name}</p>
        ${ev.desc ? `<p class="tl-desc">${ev.desc}</p>` : ''}
      </div>
    </div>
  `).join('');

  // Re-observe new elements
  observeFadeIns();
}

/* ============================================================
   FAQ — build accordion from translation data
   ============================================================ */
function buildFaq(lang) {
  const container = document.getElementById('faqList');
  if (!container) return;

  const items = TRANSLATIONS[lang].faq.items;

  container.innerHTML = items.map((item, i) => `
    <div class="faq-item">
      <button
        class="faq-btn"
        aria-expanded="false"
        aria-controls="faq-answer-${i}"
        id="faq-btn-${i}"
      >
        <span>${item.q}</span>
        <span class="faq-icon" aria-hidden="true"></span>
      </button>
      <div
        class="faq-answer"
        id="faq-answer-${i}"
        role="region"
        aria-labelledby="faq-btn-${i}"
      >
        <p class="faq-answer-body">${item.a}</p>
      </div>
    </div>
  `).join('');

  initAccordion();
}

function initAccordion() {
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item    = btn.closest('.faq-item');
      const isOpen  = item.classList.contains('open');

      // Collapse all items
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
      });

      // Open clicked item if it was closed
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ============================================================
   COUNTDOWN
   ============================================================ */
const WEDDING_DATE = new Date('2026-10-11T16:00:00');

function tick() {
  const now  = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    clearInterval(countdownTimer);
    ['cd-days', 'cd-hours', 'cd-minutes', 'cd-seconds'].forEach(id => {
      document.getElementById(id).textContent = '00';
    });
    return;
  }

  const days    = Math.floor(diff / 86400000);
  const hours   = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000)  / 60000);
  const seconds = Math.floor((diff % 60000)    / 1000);

  document.getElementById('cd-days').textContent    = pad(days, 3);
  document.getElementById('cd-hours').textContent   = pad(hours);
  document.getElementById('cd-minutes').textContent = pad(minutes);
  document.getElementById('cd-seconds').textContent = pad(seconds);
}

function initCountdown() {
  tick();
  countdownTimer = setInterval(tick, 1000);
}

/* ============================================================
   SCROLL REVEAL — IntersectionObserver
   ============================================================ */
let scrollObserver = null;

function observeFadeIns() {
  if (scrollObserver) scrollObserver.disconnect();

  scrollObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold:  0.07,
      rootMargin: '0px 0px -32px 0px',
    }
  );

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    scrollObserver.observe(el);
  });
}

/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang === currentLang) return;
      currentLang = btn.dataset.lang;
      applyTranslations(currentLang);
    });
  });
}

/* ============================================================
   INTRO ENVELOPE
   ============================================================ */

/* Hint text by language — shown on the sealed envelope */
const INTRO_HINTS = {
  es: 'Open',
  de: 'Open',
  tr: 'Open',
};

function initIntro() {
  const overlay  = document.getElementById('introOverlay');
  const envelope = document.getElementById('introEnvelope');
  const hintEl   = document.getElementById('envHint');

  if (!overlay) return;

  // Already seen this session — the <script> tag in HTML hides it via CSS,
  // so there's nothing more to do here.
  if (sessionStorage.getItem('introSeen')) return;

  // Set hint text
  hintEl.textContent = INTRO_HINTS[currentLang] || INTRO_HINTS.es;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function dismissOverlay() {
    overlay.classList.add('hiding');
    overlay.addEventListener('transitionend', function handler(e) {
      if (e.target !== overlay || e.propertyName !== 'opacity') return;
      overlay.removeEventListener('transitionend', handler);
      overlay.style.display = 'none';
      sessionStorage.setItem('introSeen', '1');
    });
  }

  function openEnvelope() {
    if (envelope.classList.contains('open')) return;

    if (reducedMotion) {
      // Skip animation for users who prefer reduced motion
      dismissOverlay();
      return;
    }

    envelope.classList.add('open');

    // Start fading the overlay while the flap is still opening
    // Timed to match the slower 1.85s flap transition
    setTimeout(dismissOverlay, 950);
  }

  envelope.addEventListener('click', openEnvelope);

  envelope.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openEnvelope();
    }
  });
}

/* ============================================================
   LOCATION PHOTO SLIDESHOW
   ============================================================ */
function initSlideshow() {
  const container = document.getElementById('locationSlideshow');
  const section   = document.getElementById('location');

  if (!container || !section) return;
  if (SLIDESHOW_IMAGES.length === 0) return; // no images configured

  // Enable the dark-overlay + light-text treatment on the section
  section.classList.add('has-slideshow');

  // Create one div per image
  const slides = SLIDESHOW_IMAGES.map((src, i) => {
    const div = document.createElement('div');
    div.className = 'slide-frame' + (i === 0 ? ' active' : '');
    div.style.backgroundImage = `url('${src}')`;
    container.appendChild(div);
    return div;
  });

  // A single image needs no cycling
  if (slides.length < 2) return;

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, SLIDESHOW_INTERVAL_MS);
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
  initLangSwitcher();
  initCountdown();
  initIntro();
  initSlideshow();

  // Small delay so the newly-built timeline/faq elements are in the DOM
  requestAnimationFrame(() => {
    requestAnimationFrame(observeFadeIns);
  });
});
