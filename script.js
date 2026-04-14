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
      eyebrow: 'Os invitamos a celebrar con nosotros',
    },
    intro: {
      p1: 'Con mucho amor en el corazón y llenos de ilusión por lo que está por venir, os invitamos a formar parte de uno de los días más especiales de nuestras vidas.',
      p2: 'El 11 de Octubre de 2026 nos daremos el «sí, quiero» y comenzaremos un nuevo capítulo — uno que queremos celebrar junto a las personas que más significan para nosotros.',
      p3: 'Entre luz, música y todos esos pequeños momentos llenos de significado, queremos crear recuerdos que perduren para siempre.',
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
        { time: '15:30', name: 'Llegada de invitados' },
        { time: '16:00', name: 'Ceremonia' },
        { time: '17:00', name: 'Aperitivo' },
        { time: '20:00', name: 'Cena' },
        { time: '22:00', name: 'Celebración' },
      ],
    },
    location: {
      label:      'El Lugar',
      title:      'Un lugar para reunirse, celebrar y recordar',
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
    footer: {
      closing: 'Esperamos compartir este momento con vosotros',
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
      eyebrow: 'Wir laden euch ein, mit uns zu feiern',
    },
    intro: {
      p1: 'Mit viel Liebe im Herzen und voller Vorfreude auf das, was vor uns liegt, laden wir euch ein, Teil unseres besonderen Tages zu sein.',
      p2: 'Am 11. Oktober 2026 werden wir uns das Ja-Wort geben und ein neues Kapitel beginnen — eines, das wir am liebsten mit den Menschen feiern möchten, die uns am nächsten stehen.',
      p3: 'Zwischen Licht, Musik und all den kleinen, bedeutungsvollen Momenten möchten wir gemeinsam mit euch Erinnerungen schaffen, die bleiben.',
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
        { time: '17:00', name: 'Aperitif' },
        { time: '20:00', name: 'Abendessen' },
        { time: '22:00', name: 'Feier' },
      ],
    },
    location: {
      label:      'Der Ort',
      title:      'Ein Ort zum Zusammenkommen, Feiern und Erinnern',
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
    footer: {
      closing: 'Wir freuen uns, diesen Moment mit euch zu teilen',
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
      eyebrow: 'Sizi bizimle kutlamaya davet ediyoruz',
    },
    intro: {
      p1: 'Kalbimiz sevgiyle dolu ve bizi bekleyen her şeye büyük bir heyecanla bakarken, hayatımızın en özel günlerinden birine sizi de davet ediyoruz.',
      p2: '11 Ekim 2026 tarihinde «evet» diyerek yeni bir başlangıç yapacağız — ve bu anı, bizim için en değerli olan insanlarla birlikte kutlamak istiyoruz.',
      p3: 'Işık, müzik ve anlam yüklü o küçük anların arasında, birlikte kalıcı hatıralar yaratmayı diliyoruz.',
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
        { time: '17:00', name: 'Aperitif' },
        { time: '20:00', name: 'Akşam Yemeği' },
        { time: '22:00', name: 'Kutlama' },
      ],
    },
    location: {
      label:      'Mekan',
      title:      'Buluşmak, kutlamak ve hatırlamak için bir yer',
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
    footer: {
      closing: 'Bu anı sizinle paylaşmaktan mutluluk duyacağız',
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
   TIMELINE ICONS — monochrome, thin-stroke SVG
   ============================================================ */
const TL_ICONS = [
  // 0 — Arrival: elegant downward arrow with baseline
  `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="9" y1="2" x2="9" y2="11"/><path d="M6 8.5 L9 11.5 L12 8.5"/><line x1="3" y1="15" x2="15" y2="15"/></svg>`,
  // 1 — Ceremony: chapel arch with cross
  `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 16 L3 8 Q3 2 9 2 Q15 2 15 8 L15 16"/><line x1="9" y1="2" x2="9" y2="5"/><line x1="7.2" y1="3.5" x2="10.8" y2="3.5"/></svg>`,
  // 2 — Cocktail: champagne flute
  `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 2 L13 2 L10 11 L10 16"/><line x1="7.5" y1="16" x2="12.5" y2="16"/><path d="M7 5.5 Q9 4 11 5.5" opacity="0.5"/></svg>`,
  // 3 — Dinner: fork and knife
  `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="2" x2="7" y2="16"/><line x1="5" y1="2" x2="5" y2="7"/><line x1="9" y1="2" x2="9" y2="7"/><line x1="5" y1="7" x2="9" y2="7"/><path d="M12 2 L14 4 Q14.5 7 12 7.5 L12 16"/></svg>`,
  // 4 — Celebration: starburst with circle
  `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" aria-hidden="true"><line x1="9" y1="1" x2="9" y2="4"/><line x1="9" y1="14" x2="9" y2="17"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="14" y1="9" x2="17" y2="9"/><line x1="3.5" y1="3.5" x2="5.6" y2="5.6"/><line x1="12.4" y1="12.4" x2="14.5" y2="14.5"/><line x1="14.5" y1="3.5" x2="12.4" y2="5.6"/><line x1="5.6" y1="12.4" x2="3.5" y2="14.5"/><circle cx="9" cy="9" r="2.6"/></svg>`,
];

/* ============================================================
   TIMELINE — build from translation data
   ============================================================ */
function buildTimeline(lang) {
  const container = document.getElementById('timeline');
  if (!container) return;

  const events = TRANSLATIONS[lang].program.events;

  container.innerHTML = events.map((ev, i) => `
    <div class="timeline-item fade-in" role="listitem" style="transition-delay:${i * 0.09}s">
      <div class="tl-time">${ev.time}</div>
      <div class="tl-axis">
        <div class="tl-dot"></div>
      </div>
      <div class="tl-body">
        <div class="tl-event-row">
          <span class="tl-icon">${TL_ICONS[i % TL_ICONS.length]}</span>
          <p class="tl-name">${ev.name}</p>
        </div>
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
   FULLSCREEN ENVELOPE INTRO
   ============================================================ */

function initIntro() {
  const overlay = document.getElementById('introOverlay');
  const cta     = document.getElementById('envHeroCta');

  if (!overlay || !cta) return;

  // Already seen this session — CSS hides the overlay immediately.
  if (sessionStorage.getItem('introSeen')) return;

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

  function openInvitation() {
    if (overlay.classList.contains('opening')) return;

    if (reducedMotion) {
      dismissOverlay();
      return;
    }

    overlay.classList.add('opening');

    // Flap rotation takes 1.7s; begin fade-out at the 1.0s mark
    // so the overlay is dissolving as the flap completes its arc.
    setTimeout(dismissOverlay, 1000);
  }

  cta.addEventListener('click', openInvitation);

  cta.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openInvitation();
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
