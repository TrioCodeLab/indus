/* ===================================================
   MH Industrial Equipments — Main JS
   =================================================== */

// ── Navbar scroll state ──────────────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ── Mobile menu ──────────────────────────────────────
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.querySelector('.navbar__mobile');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    })
  );
}

// ── FAQ accordion ────────────────────────────────────
document.querySelectorAll('.faq__item').forEach(item => {
  item.querySelector('.faq__question')?.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ── Active nav link ──────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar__nav a, .navbar__mobile a').forEach(a => {
  const href = a.getAttribute('href')?.split('/').pop();
  if (href === currentPage) a.classList.add('active');
});

// ── Product page filter ──────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card[data-category]');
if (filterBtns.length && productCards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      productCards.forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

// ── Search overlay ───────────────────────────────────
const searchProducts = [
  { name: 'Tyre Couplings', category: 'Couplings', url: 'pages/products/tyre-couplings.html', icon: 'coupling' },
  { name: 'Gear Couplings', category: 'Couplings', url: 'pages/products/gear-couplings.html', icon: 'coupling' },
  { name: 'Jaw Couplings', category: 'Couplings', url: 'pages/products/jaw-couplings.html', icon: 'coupling' },
  { name: 'Oil Seals', category: 'Seals', url: 'pages/products/oil-seals.html', icon: 'seal' },
  { name: 'Hydraulic Seals', category: 'Seals', url: 'pages/products/hydraulic-seals.html', icon: 'seal' },
  { name: 'Pneumatic Seals', category: 'Seals', url: 'pages/products/pneumatic-seals.html', icon: 'seal' },
  { name: 'Roller Chains', category: 'Chains', url: 'pages/products/roller-chains.html', icon: 'chain' },
  { name: 'Conveyor Chains', category: 'Chains', url: 'pages/products/conveyor-chains.html', icon: 'chain' },
  { name: 'Sprockets', category: 'Sprockets', url: 'pages/category/sprockets.html', icon: 'sprocket' },
  { name: 'V-Belts', category: 'Belts', url: 'pages/products/v-belts.html', icon: 'belt' },
  { name: 'Timing Belts', category: 'Belts', url: 'pages/products/timing-belts.html', icon: 'belt' },
  { name: 'Pulleys', category: 'Pulleys', url: 'pages/category/pulleys.html', icon: 'pulley' },
  { name: 'Hose Clamps', category: 'Hose Clamps', url: 'pages/category/hose-clamps.html', icon: 'clamp' },
  { name: 'Anti-Vibration Mounts', category: 'Mounts', url: 'pages/products/anti-vibration-mounts.html', icon: 'mount' },
  { name: 'Leveling Mounts', category: 'Mounts', url: 'pages/products/leveling-mounts.html', icon: 'mount' },
];

function getIcon(type) {
  const icons = {
    coupling: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>`,
    seal: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
    chain: `<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7C4.24 7 2 9.24 2 12s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>`,
    sprocket: `<svg viewBox="0 0 24 24"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.3.07-.62.07-.95s-.03-.64-.07-1l2.1-1.63c.19-.14.25-.41.12-.62l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.21-.07.48.12.62L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.14-.25.41-.12.62l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.58 1.69-.98l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.21.07-.48-.12-.62l-2.1-1.6z"/></svg>`,
    belt: `<svg viewBox="0 0 24 24"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72a.499.499 0 0 1-.41-.79c.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25a.5.5 0 0 1-.12.7.499.499 0 0 1-.7-.12 9.116 9.116 0 0 0-3.39-2.94c-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.94-.08.14-.23.23-.39.23zm6.25 14.43a.47.47 0 0 1-.35-.15c-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.65 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15z"/></svg>`,
    pulley: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
    clamp: `<svg viewBox="0 0 24 24"><path d="M20 5H4v14h16V5zm-2 12H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2z"/></svg>`,
    mount: `<svg viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>`,
  };
  return icons[type] || icons['coupling'];
}

function openSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (overlay) {
    overlay.classList.add('open');
    overlay.querySelector('#searchInput')?.focus();
    document.body.style.overflow = 'hidden';
  }
}

function closeSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function renderSearchResults(query) {
  const container = document.getElementById('searchResults');
  if (!container) return;

  if (!query.trim()) {
    container.innerHTML = `<p style="text-align:center;color:var(--text-muted);font-size:14px;padding:24px">Start typing to search products...</p>`;
    return;
  }

  const results = searchProducts.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!results.length) {
    container.innerHTML = `<p style="text-align:center;color:var(--text-muted);font-size:14px;padding:24px">No products found for "${query}"</p>`;
    return;
  }

  container.innerHTML = results.map(r => `
    <a href="${r.url}" class="search-result-item">
      <div class="search-result-item__icon">${getIcon(r.icon)}</div>
      <div>
        <div class="search-result-item__name">${r.name}</div>
        <div class="search-result-item__cat">${r.category}</div>
      </div>
    </a>
  `).join('');
}

// Wire search
document.addEventListener('DOMContentLoaded', () => {
  const searchTriggers = document.querySelectorAll('[data-search-trigger]');
  searchTriggers.forEach(t => t.addEventListener('click', openSearch));

  const overlay = document.getElementById('searchOverlay');
  if (overlay) {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
    const input = overlay.querySelector('#searchInput');
    if (input) {
      input.addEventListener('input', e => renderSearchResults(e.target.value));
      // Initial state
      renderSearchResults('');
    }
    overlay.querySelector('#searchClose')?.addEventListener('click', closeSearch);
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });
});

// ── Formspree handler ────────────────────────────────
document.querySelectorAll('.js-formspree').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.style.display = 'none';
        const success = form.parentElement.querySelector('.form-success');
        if (success) success.style.display = 'block';
      } else {
        btn.innerHTML = 'Error — try again';
        btn.disabled = false;
        setTimeout(() => { btn.innerHTML = original; }, 3000);
      }
    } catch {
      btn.innerHTML = 'Network error';
      btn.disabled = false;
      setTimeout(() => { btn.innerHTML = original; }, 3000);
    }
  });
});

// ── Scroll-triggered fade-ins ────────────────────────
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-animate]').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  io.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // small delay for staggered children
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    parent.querySelectorAll(':scope > *').forEach((child, i) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';
      child.style.transition = `opacity 0.45s ${i * 0.08}s ease, transform 0.45s ${i * 0.08}s ease`;
    });
    const ioStagger = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(':scope > *').forEach(child => {
            child.style.opacity = '1';
            child.style.transform = 'none';
          });
          ioStagger.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    ioStagger.observe(parent);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-animate].in-view').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});
