/**
 * OLLIMIA SQUEEZE - HOMEPAGE INTERACTION LOGIC
 * Gerenciamento de Header, Slider Comparativo, Accordion FAQ e Form Tabs
 */

document.addEventListener('DOMContentLoaded', () => {

  /* 1. Header Scroll Effect */
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* 2. Comparison Toggle (Garrafa de Vidro vs Ollimia Squeeze) */
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  const compCardGlass = document.querySelector('.comp-card-glass');
  const compCardSqueeze = document.querySelector('.comp-card-squeeze');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.target;
      if (target === 'squeeze') {
        compCardGlass.style.display = 'none';
        compCardSqueeze.style.display = 'flex';
      } else if (target === 'glass') {
        compCardSqueeze.style.display = 'none';
        compCardGlass.style.display = 'flex';
      } else {
        /* Ambos Visíveis */
        compCardGlass.style.display = 'flex';
        compCardSqueeze.style.display = 'flex';
      }
    });
  });

  /* 3. Accordion FAQ */
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');

      /* Fechar todos os abertos */
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      /* Toggle no atual */
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  /* 4. Form Tabs (B2C Waitlist / B2B Revendedor / B2B Distribuidor) */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.dataset.tab;
      document.getElementById(targetId).classList.add('active');
    });
  });

  /* 5. Lead Form Submission Handler */
  const leadForms = document.querySelectorAll('.lead-form');
  leadForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML = '⏳ Enviando cadastro...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = '✅ Cadastro Confirmado com Sucesso!';
        btn.style.background = '#28a745';
        btn.style.color = '#ffffff';
        form.reset();

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.background = '';
          btn.style.color = '';
          btn.disabled = false;
        }, 4000);
      }, 1200);
    });
  });

});
