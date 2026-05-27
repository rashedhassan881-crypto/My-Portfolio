/**
 * ============================================================
 *  PORTFOLIO — main.js
 *  Reads PORTFOLIO_DATA from data.js and renders all sections.
 *  To update content: edit data.js only.
 * ============================================================
 */

/* ── RENDER HELPERS ─────────────────────────────────────────── */

/** Set text content safely */
const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
};

/** Set innerHTML safely */
const setHTML = (id, html) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
};

/* ── PAGE META ──────────────────────────────────────────────── */
function renderMeta(data) {
  document.title = `${data.name} | Portfolio`;
  setText('page-title', `${data.name} | Portfolio`);
}

/* ── NAVBAR ─────────────────────────────────────────────────── */
function renderNav(data) {
  // Show initials as logo
  const initials = data.name.split(' ').map(w => w[0]).join('').slice(0, 3);
  setText('nav-logo', initials);

  // Sticky navbar on scroll
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  // Close mobile nav when a link is clicked
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
}

/* ── HERO ───────────────────────────────────────────────────── */
function renderHero(data) {
  setText('hero-tagline', data.tagline);

  // Split name at last space for accent color on last name
  const nameParts = data.name.split(' ');
  const lastName  = nameParts.pop();
  const firstName = nameParts.join(' ');
  setHTML('hero-name', `${firstName} <span>${lastName}</span>`);

  setText('hero-headline', data.headline);
  setText('hero-bio',      data.bio);

  // Social links
  const socialHTML = data.social.map(s =>
    `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}">
       <i class="${s.icon}"></i>
     </a>`
  ).join('');
  setHTML('hero-social', socialHTML);
}

/* ── ABOUT ──────────────────────────────────────────────────── */
function renderAbout(data) {
  if (!data.about) return;

  // ১. প্যারাগ্রাফ রেন্ডার করা (আগের মতোই থাকবে)
  const paragraphsHTML = data.about.paragraphs
    .map(p => `<p class="reveal">${p}</p>`)
    .join('');
  setHTML('about-text', paragraphsHTML);

  // 🚀 নতুন অংশ: স্লাইডারের ছবি লোড করার কোড
  if (data.about.sliderImages && data.about.sliderImages.length > 0) {
    const sliderHtml = data.about.sliderImages.map(img => 
      `<img src="${img}" alt="Event Memory" class="reveal" loading="lazy" />`
    ).join('');
    setHTML('about-slider', sliderHtml);
  }

  // ২. হাইলাইটস রেন্ডার করা (আগের মতোই থাকবে)
  const highlightsHTML = data.about.highlights.map((h, i) =>
    `<div class="highlight-card reveal reveal-delay-${i + 1}">
       <i class="${h.icon}"></i>
       <span>${h.label}</span>
     </div>`
  ).join('');
  setHTML('about-highlights', highlightsHTML);
}

/* ── SKILLS ─────────────────────────────────────────────────── */
function renderSkills(data) {
  const skillsHTML = data.skills.map((s, i) =>
    `<div class="skill-card reveal reveal-delay-${(i % 4) + 1}">
       <div class="skill-header">
         <span class="skill-name">${s.name}</span>
         <span class="skill-category">${s.category}</span>
       </div>
       <div class="skill-bar-bg">
         <div class="skill-bar-fill" data-level="${s.level}"></div>
       </div>
       <div class="skill-level">${s.level}%</div>
     </div>`
  ).join('');
  setHTML('skills-grid', skillsHTML);

  // Certifications
  const certsHTML = data.certifications.map((c, i) =>
    `<div class="cert-card reveal reveal-delay-${(i % 4) + 1}">
       <div class="cert-icon"><i class="${c.icon}"></i></div>
       <div>
         <div class="cert-title">${c.title}</div>
         <div class="cert-meta">${c.issuer} · ${c.year}</div>
       </div>
     </div>`
  ).join('');
  setHTML('certs-grid', certsHTML);
}

/* ── PROJECTS ───────────────────────────────────────────────── */
function renderProjects(data) {
  if (!data.projects) return;

  const html = data.projects.map((p, i) => {
    const linkHTML = p.link && p.link !== '#' 
      ? `<a href="${p.link}" target="_blank" class="project-link" rel="noopener noreferrer">View Project <i class="fas fa-external-link-alt"></i></a>`
      : '';

    // 🚀 নতুন লজিক: প্রোজেক্টে সার্টিফিকেট থাকলে গোল্ডেন ব্যাজ তৈরি হবে
    const certHTML = p.certificate 
      ? `<div class="project-cert"><i class="fas fa-certificate"></i> ${p.certificate}</div>`
      : '';

    return `
      <div class="project-card reveal reveal-delay-${(i % 3) + 1}">
        <div class="project-icon-wrap"><i class="${p.icon}"></i></div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.description}</div>
        
        ${certHTML} <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        ${linkHTML}
      </div>
    `;
  }).join('');

  setHTML('projects-grid', html);
}
/* ── EDUCATION ──────────────────────────────────────────────── */
function renderEducation(data) {
  const html = data.education.map(e =>
    `<div class="timeline-item">
       <div class="timeline-dot"></div>
       <div class="timeline-content">
         <div class="timeline-period">${e.period}</div>
         <div class="timeline-degree">${e.degree} — ${e.field}</div>
         <div class="timeline-inst">${e.institution}</div>
         <span class="timeline-status">${e.status}</span>
       </div>
     </div>`
  ).join('');
  setHTML('education-timeline', html);
}

/* ── CONTACT ────────────────────────────────────────────────── */
function renderContact(data) {
  const infoHTML =
    `<h3>Let's Build Something Together</h3>
     <p>Whether it's a networking project, a Python collaboration, or just a conversation about tech — I'm always open to connecting.</p>
     <div class="contact-details">
       <div class="contact-detail">
         <i class="fas fa-envelope"></i>
         <span>${data.email}</span>
       </div>
       <div class="contact-detail">
         <i class="fas fa-phone"></i>
         <span>${data.phone}</span>
       </div>
       <div class="contact-detail">
         <i class="fas fa-map-marker-alt"></i>
         <span>${data.location}</span>
       </div>
     </div>
     <div class="contact-socials">
       ${data.social.map(s =>
         `<a href="${s.url}" target="_blank" rel="noopener">
            <i class="${s.icon}"></i> ${s.label}
          </a>`
       ).join('')}
     </div>`;
  setHTML('contact-info', infoHTML);

  // Form → mailto handler (static-site safe)
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name    = document.getElementById('cf-name').value.trim();
    const email   = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    const subject  = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body     = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailto   = `mailto:${data.email}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  });
}

/* ── FOOTER ─────────────────────────────────────────────────── */
function renderFooter(data) {
  setText('footer-name', data.name);
  setText('footer-year', new Date().getFullYear());
}

/* ── INTERSECTION OBSERVER (scroll reveal + skill bars) ─────── */
function initObservers() {
  // Generic reveal
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .timeline-item').forEach(el => {
    revealObserver.observe(el);
  });

  // Skill bar fill animation (triggered on scroll into view)
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill  = entry.target;
        const level = fill.dataset.level;
        // Slight delay so the bar animates nicely after appearing
        setTimeout(() => { fill.style.width = level + '%'; }, 200);
        barObserver.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    barObserver.observe(bar);
  });
}

/* ── ACTIVE NAV LINK HIGHLIGHT ──────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navAs    = document.querySelectorAll('.nav-links a');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAs.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => obs.observe(s));
}

/* ── BOOT ───────────────────────────────────────────────────── */
(function init() {
  const data = PORTFOLIO_DATA; // from data.js

  renderMeta(data);
  renderNav(data);
  renderHero(data);
  renderAbout(data);
  renderSkills(data);
  renderProjects(data);
  renderEducation(data);
  renderContact(data);
  renderFooter(data);

  // Observers run after DOM is populated
  requestAnimationFrame(() => {
    initObservers();
    initActiveNav();
  });
})();
