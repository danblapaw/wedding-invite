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
        { time: '19:30', name: 'Fotos de grupo' },
        { time: '20:00', name: 'Cena' },
        { time: '22:00', name: 'Baile Nupcial y Fiesta' },
        { time: '3:00',  name: 'Fin' },
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
    dresscode: {
      label:   'Dress Code',
      title:   'Vestimenta de Boda',
      viewPdf: 'Ver el dress code completo',
    },
    footer: {
      closing: 'Esperamos compartir este momento con vosotros',
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
        { time: '19:30', name: 'Gruppenfotos' },
        { time: '20:00', name: 'Abendessen' },
        { time: '22:00', name: 'Hochzeitstanz und Feier' },
        { time: '3:00',  name: 'Ende' },
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
    dresscode: {
      label:   'Dresscode',
      title:   'Hochzeitskleidung',
      viewPdf: 'Vollständigen Dresscode ansehen',
    },
    footer: {
      closing: 'Wir freuen uns, diesen Moment mit euch zu teilen',
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
        { time: '19:30', name: 'Grup Fotoğrafı' },
        { time: '20:00', name: 'Akşam Yemeği' },
        { time: '22:00', name: 'İlk Dans ve Kutlama' },
        { time: '3:00',  name: 'Bitiş' },
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
    dresscode: {
      label:   'Kıyafet Kodu',
      title:   'Düğün Kıyafetleri',
      viewPdf: 'Tüm kıyafet kodunu görüntüle',
    },
    footer: {
      closing: 'Bu anı sizinle paylaşmaktan mutluluk duyacağız',
    },
  },
};

/* ============================================================
   STATE
   ============================================================ */
let currentLang = (typeof window.SITE_LANG !== 'undefined') ? window.SITE_LANG : 'es';
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

  // HTML lang attribute
  document.documentElement.lang = lang;

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
  // 3 — Group photos: camera
  `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 7 Q2 6 3 6 L5.5 6 L6.5 4 L11.5 4 L12.5 6 L15 6 Q16 6 16 7 L16 14 Q16 15 15 15 L3 15 Q2 15 2 14 Z"/><circle cx="9" cy="10.5" r="2.2"/></svg>`,
  // 4 — Dinner: fork and knife
  `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="2" x2="7" y2="16"/><line x1="5" y1="2" x2="5" y2="7"/><line x1="9" y1="2" x2="9" y2="7"/><line x1="5" y1="7" x2="9" y2="7"/><path d="M12 2 L14 4 Q14.5 7 12 7.5 L12 16"/></svg>`,
  // 5 — Dance: musical note
  `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 14 L8 4 L15 2 L15 12"/><circle cx="6.5" cy="14" r="1.8"/><circle cx="13.5" cy="12" r="1.8"/></svg>`,
  // 6 — End: crescent moon
  `<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" aria-hidden="true"><path d="M13.5 11.5 A5.8 5.8 0 1 1 6.5 4.5 A4.2 4.2 0 0 0 13.5 11.5 Z"/></svg>`,
];

/* ============================================================
   TIMELINE — build from translation data
   ============================================================ */
function buildTimeline(lang) {
  const container = document.getElementById('timeline');
  if (!container) return;

  const events = TRANSLATIONS[lang].program.events;

  container.innerHTML = events.map((ev, i) => `
    <div class="timeline-item fade-in" role="listitem" style="transition-delay:${i * 0.12}s">
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
      /*
       * threshold 0.08: fire when ~8% of the element is in the viewport.
       * rootMargin clips 60px from the bottom — animations trigger a
       * beat before the element fully arrives, so they complete
       * naturally as the user reads rather than lagging behind the scroll.
       */
      threshold:  0.08,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    scrollObserver.observe(el);
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

    // Start the slow zoom toward the wax seal
    overlay.classList.add('opening');

    // Let the zoom breathe for ~1.5s before the overlay fades away.
    // The photo continues zooming underneath as the page dissolves in.
    setTimeout(dismissOverlay, 1500);
  }

  // Whole overlay is the tap/click surface — CTA click bubbles up naturally.
  overlay.addEventListener('click', openInvitation);

  // Keyboard: keep CTA accessible for Tab users
  cta.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openInvitation();
    }
  });

  // Tactile press feedback — add/remove .pressing on the overlay
  function addPressing()    { overlay.classList.add('pressing'); }
  function removePressing() { overlay.classList.remove('pressing'); }

  overlay.addEventListener('mousedown',  addPressing);
  overlay.addEventListener('touchstart', addPressing,  { passive: true });
  overlay.addEventListener('mouseup',    removePressing);
  overlay.addEventListener('mouseleave', removePressing);
  overlay.addEventListener('touchend',   removePressing);
  overlay.addEventListener('touchcancel', removePressing);
}

/* ============================================================
   AUDIO
   ============================================================ */
function initAudio() {
  const audio = document.getElementById('bgAudio');
  const btn   = document.getElementById('audioBtn');
  if (!audio || !btn) return;

  audio.volume = 0.45;

  let started = false;

  function startAudio() {
    if (started) return;
    started = true;
    audio.play().catch(() => {
      // Playback rejected (browser policy) — site continues normally
      started = false;
    });
  }

  // Piggyback on the intro overlay click — the first real user interaction.
  // This satisfies mobile browser autoplay restrictions without a second tap.
  const overlay = document.getElementById('introOverlay');
  if (overlay && !sessionStorage.getItem('introSeen')) {
    overlay.addEventListener('click', startAudio, { once: true });
  }

  // Toggle play / pause via the control button
  btn.addEventListener('click', e => {
    e.stopPropagation(); // prevent bubbling to any underlying element
    if (!started || audio.paused) {
      audio.play().catch(() => {});
      started = true;
    } else {
      audio.pause();
    }
  });

  // Keep button icon in sync with actual playback state
  audio.addEventListener('play', () => {
    btn.classList.add('playing');
    btn.setAttribute('aria-label', 'Pausar música');
  });
  audio.addEventListener('pause', () => {
    btn.classList.remove('playing');
    btn.setAttribute('aria-label', 'Reproducir música');
  });
}

/* ============================================================
   LOCATION PHOTO SLIDESHOW — disabled (inline carousel used instead)
   ============================================================ */
function initSlideshow() {
  // Background slideshow replaced by inline location carousel
}

/* ============================================================
   LOCATION INLINE CAROUSEL
   ============================================================ */
function initLocationCarousel() {
  const slides = document.querySelectorAll('.lc-slide');
  if (slides.length < 2) return;

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 3000);
}

/* ============================================================
   DRESS CODE MARQUEE — pause on touch
   ============================================================ */
function initDresscodeMarquee() {
  const track = document.querySelector('.dresscode-track');
  if (!track) return;

  track.addEventListener('touchstart', () => {
    track.style.animationPlayState = 'paused';
  }, { passive: true });

  track.addEventListener('touchend', () => {
    track.style.animationPlayState = 'running';
  }, { passive: true });

  track.addEventListener('touchcancel', () => {
    track.style.animationPlayState = 'running';
  }, { passive: true });
}

/* ============================================================
   VIDEO AUTOPLAY
   ============================================================ */
function initVideoAutoplay() {
  const video = document.querySelector('.video-hero-bg');
  if (!video) return;

  const attempt = video.play();
  if (attempt !== undefined) {
    attempt.catch(() => {
      const retry = () => {
        video.play().catch(() => {});
      };
      document.addEventListener('touchstart', retry, { once: true });
      document.addEventListener('click', retry, { once: true });
    });
  }
}

/* ============================================================
   RSVP FORM — fetch submit, no redirect
   ============================================================ */
function initRsvp() {
  const form    = document.getElementById('rsvp-form');
  const success = document.getElementById('rsvpSuccess');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        if (success) {
          form.hidden    = true;
          success.hidden = false;
        } else {
          alert('Gracias por confirmar ❤️');
          form.reset();
        }
      } else {
        alert('No se pudo enviar el formulario.');
      }
    } catch (error) {
      alert('No se pudo enviar el formulario.');
    }
  });
}

/* ============================================================
   RSVP KEYBOARD SCROLL FIX — iOS / iPhone Safari
   Disables scroll-snap and scrolls the focused field into view
   so the iOS keyboard never covers the active input or textarea.
   ============================================================ */
function initRsvpKeyboardScroll() {
  const form = document.getElementById('rsvp-form');
  if (!form) return;

  // Only text-entry fields need this — radio buttons don't trigger the keyboard
  const fields = form.querySelectorAll(
    'input:not([type="radio"]):not([type="hidden"]):not([tabindex="-1"]), textarea, select'
  );
  if (!fields.length) return;

  const html = document.documentElement;

  fields.forEach(field => {
    field.addEventListener('focus', () => {
      html.classList.add('keyboard-open');
      // Wait ~350 ms for the iOS keyboard animation to finish, then centre the field
      setTimeout(() => {
        field.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 350);
    });

    field.addEventListener('blur', () => {
      // Short delay to let focus move to another field before removing the class
      setTimeout(() => {
        const active = document.activeElement;
        const stillInForm = form.contains(active) &&
          active !== document.body &&
          active.tagName !== 'BUTTON';
        if (!stillInForm) {
          html.classList.remove('keyboard-open');
        }
      }, 150);
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
  initCountdown();
  initIntro();
  initAudio();
  initSlideshow();
  initLocationCarousel();
  initDresscodeMarquee();
  initVideoAutoplay();
  initRsvp();
  initRsvpKeyboardScroll();

  // Small delay so the newly-built timeline/faq elements are in the DOM
  requestAnimationFrame(() => {
    requestAnimationFrame(observeFadeIns);
  });
});
