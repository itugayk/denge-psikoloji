import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveals() {
  if (prefersReduced) {
    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  // Tekil & gruplanmış sakin reveal'lar
  const groups = new Map<Element, HTMLElement[]>();

  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    const parent = el.closest('[data-reveal-group]') ?? el;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent)!.push(el);
  });

  groups.forEach((els) => {
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: els[0],
        start: 'top 86%',
        once: true,
      },
    });
  });
}

function initHeroIntro() {
  if (prefersReduced) return;
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;

  const items = hero.querySelectorAll<HTMLElement>('[data-hero-item]');
  if (!items.length) return;

  gsap.set(items, { opacity: 0, y: 26 });
  gsap.to(items, {
    opacity: 1,
    y: 0,
    duration: 1.3,
    ease: 'power3.out',
    stagger: 0.14,
    delay: 0.15,
  });

  // Çok hafif paralaks — hero görseli
  const art = hero.querySelector<HTMLElement>('[data-hero-art]');
  if (art) {
    gsap.to(art, {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
    });
  }
}

function initHeaderState() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initAccordion() {
  const items = document.querySelectorAll<HTMLElement>('[data-accordion-item]');
  items.forEach((item) => {
    const trigger = item.querySelector<HTMLButtonElement>('[data-accordion-trigger]');
    const panel = item.querySelector<HTMLElement>('[data-accordion-panel]');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.getAttribute('data-open') === 'true';

      // Aynı grup içinde diğerlerini kapat (yumuşak)
      const group = item.closest('[data-accordion]');
      if (group) {
        group.querySelectorAll<HTMLElement>('[data-accordion-item]').forEach((other) => {
          if (other !== item && other.getAttribute('data-open') === 'true') {
            closePanel(other);
          }
        });
      }

      if (isOpen) closePanel(item);
      else openPanel(item);
    });
  });

  function openPanel(item: HTMLElement) {
    const trigger = item.querySelector<HTMLButtonElement>('[data-accordion-trigger]')!;
    const panel = item.querySelector<HTMLElement>('[data-accordion-panel]')!;
    item.setAttribute('data-open', 'true');
    trigger.setAttribute('aria-expanded', 'true');
    if (prefersReduced) {
      panel.style.height = 'auto';
      return;
    }
    gsap.set(panel, { height: 'auto' });
    gsap.from(panel, { height: 0, duration: 0.55, ease: 'power2.out' });
    gsap.fromTo(
      panel.firstElementChild,
      { opacity: 0, y: 6 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: 'power2.out' }
    );
  }

  function closePanel(item: HTMLElement) {
    const trigger = item.querySelector<HTMLButtonElement>('[data-accordion-trigger]')!;
    const panel = item.querySelector<HTMLElement>('[data-accordion-panel]')!;
    item.setAttribute('data-open', 'false');
    trigger.setAttribute('aria-expanded', 'false');
    if (prefersReduced) {
      panel.style.height = '0px';
      return;
    }
    gsap.to(panel, { height: 0, duration: 0.45, ease: 'power2.inOut' });
  }
}

function initMobileNav() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-nav-menu]');
  if (!toggle || !menu) return;

  const close = () => {
    menu.setAttribute('data-open', 'false');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  const open = () => {
    menu.setAttribute('data-open', 'true');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.getAttribute('data-open') === 'true';
    isOpen ? close() : open();
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
}

function init() {
  document.documentElement.classList.remove('no-js');
  initHeaderState();
  initHeroIntro();
  initReveals();
  initAccordion();
  initMobileNav();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
