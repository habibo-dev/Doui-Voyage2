const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'فتح القائمة' : 'إغلاق القائمة');
  nav?.classList.toggle('open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'فتح القائمة');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

// Set this to a real form endpoint (for example, a serverless function or form provider)
// before launch. This static prototype deliberately does not pretend to deliver inquiries.
const FORM_ENDPOINT = '';
const form = document.querySelector('#inquiry-form');
const status = document.querySelector('#form-status');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const payload = Object.fromEntries(new FormData(form).entries());
  status.classList.add('visible');

  if (!FORM_ENDPOINT) {
    status.innerHTML = 'شكراً لاهتمامك! نموذج التواصل يحتاج إلى ربط بصندوق استقبال الطلبات قبل الإطلاق. للرد المباشر، <a href="tel:+21327504261">اتصل بنا على 027 50 42 61</a>.';
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'جارٍ إرسال طلبك…';
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error('Request failed');
    form.reset();
    status.textContent = 'وصلنا طلبك، شكراً لك. سنتواصل معك قريباً.';
  } catch (error) {
    status.innerHTML = 'تعذّر إرسال الطلب حالياً. يرجى <a href="tel:+21327504261">الاتصال بنا مباشرة على 027 50 42 61</a>.';
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = 'إرسال طلب التواصل <span>↗</span>';
  }
});
