
(function () {
  // Highlight active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Contact form (client-side validation + success message)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const status = document.getElementById('formStatus');

      if (!name || !email || !message) {
        status.textContent = 'Please fill out all fields.';
        status.style.color = '#f87171';
        return;
      }

      // Very basic email pattern
      const emailOk = /.+@.+\..+/.test(email);
      if (!emailOk) {
        status.textContent = 'Please enter a valid email address.';
        status.style.color = '#f87171';
        return;
      }

      // Simulate "sent"
      status.textContent = 'Thanks! Your message has been sent.';
      status.style.color = '#34d399';
      form.reset();
    });
  }

  // Toggle captions on recommendation images
  document.querySelectorAll('.reveal').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });
})();
