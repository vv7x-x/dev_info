// ملف جافاسكريبت الرئيسي للموقع العصري
// يحتوي على تفاعلات بسيطة فقط (بدون مكتبات خارجية)

// تفعيل زر "اعرف المزيد" للتمرير إلى قسم "من أنا"
document.getElementById('scroll-down').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// تفعيل زر العودة للأعلى
const backToTopBtn = document.getElementById('back-to-top');
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// إظهار زر العودة للأعلى عند التمرير
window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.style.display = 'none';

// تفعيل الوضع الداكن/الفاتح
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('light-mode');
  // تغيير الأيقونة
  themeToggle.classList.toggle('active');
});

// إظهار شريط التنقل عند التمرير
const navbar = document.getElementById('navbar');
let lastScroll = 0;
window.addEventListener('scroll', function() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = window.scrollY;
});

// تأثيرات ظهور الأقسام عند التمرير (Scroll Animation)
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', revealSections);
function revealSections() {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < trigger) {
      section.classList.add('show');
    }
  });
}
revealSections();

// التحقق من نموذج التواصل
const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // تحقق بسيط من الحقول
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    formMsg.textContent = 'يرجى تعبئة جميع الحقول.';
    formMsg.style.color = '#ff00ea';
    return;
  }
  // تحقق من البريد الإلكتروني
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMsg.textContent = 'يرجى إدخال بريد إلكتروني صحيح.';
    formMsg.style.color = '#ff00ea';
    return;
  }
  // نجاح
  formMsg.textContent = 'تم إرسال رسالتك بنجاح!';
  formMsg.style.color = '#00ff6a';
  contactForm.reset();
  setTimeout(() => { formMsg.textContent = ''; }, 3000);
});

/*
============================
تعليمات استخدام وتعديل الموقع:
============================
- لتغيير بيانات المطور أو الروابط أو المشاريع، عدل النصوص أو الروابط في index.html.
- لتغيير الألوان أو الخطوط أو التأثيرات، عدل المتغيرات أو القواعد في styles.css.
- لإضافة مهارات أو مشاريع جديدة، انسخ بطاقة skill-card أو project-card وعدل المحتوى.
- جميع التفاعلات مكتوبة في main.js ويمكنك إضافة وظائف جديدة بسهولة.
- الموقع متجاوب مع جميع الشاشات.
- لا يحتاج لأي مكتبات خارجية سوى FontAwesome للأيقونات.
*/
