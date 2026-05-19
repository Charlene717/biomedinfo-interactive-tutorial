(function(){
  const SK='biomedinfo_lang';
  let lang=localStorage.getItem(SK)||'en';

  function apply(l){
    lang=l; localStorage.setItem(SK,l);
    document.documentElement.lang=l==='zh'?'zh-Hant':'en';
    // Show/hide lang-specific blocks
    document.querySelectorAll('[data-lang]').forEach(el=>{
      el.style.display=el.dataset.lang===l?'':'none';
    });
    // Update simple text swaps
    document.querySelectorAll('[data-zh][data-en]').forEach(el=>{
      el.textContent=el.dataset[l];
    });
    // Toggle button
    const btn=document.getElementById('langToggle');
    if(btn) btn.textContent=l==='zh'?'EN':'中文';
    // Fire event for charts etc
    document.dispatchEvent(new CustomEvent('langchange',{detail:{lang:l}}));
  }

  function toggle(){ apply(lang==='zh'?'en':'zh'); }
  function get(){ return lang; }

  document.addEventListener('DOMContentLoaded',()=>{
    const nav=document.querySelector('.top-nav-inner');
    if(nav && !document.getElementById('langToggle')){
      const btn=document.createElement('button');
      btn.id='langToggle'; btn.className='lang-toggle';
      btn.textContent=lang==='zh'?'EN':'中文';
      btn.onclick=toggle; nav.appendChild(btn);
    }
    apply(lang);
  });

  window.I18n={apply,toggle,get};
})();

// Progress bar (scroll indicator) — shared utility
document.addEventListener('DOMContentLoaded',()=>{
  const bar=document.getElementById('progressBar');
  if(!bar) return;
  window.addEventListener('scroll',()=>{
    const h=document.documentElement;
    const pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
    bar.style.width=pct+'%';
  });
});

// Quiz helper — bind clicks
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.quiz-opt').forEach(opt=>{
    opt.addEventListener('click',()=>{
      const q=opt.closest('.quiz-q'); if(!q) return;
      const correct=opt.dataset.correct==='1';
      q.querySelectorAll('.quiz-opt').forEach(o=>{
        o.classList.remove('correct','wrong');
        o.style.pointerEvents='none';
      });
      opt.classList.add(correct?'correct':'wrong');
      // Reveal correct
      q.querySelectorAll('.quiz-opt').forEach(o=>{
        if(o.dataset.correct==='1') o.classList.add('correct');
      });
      const fb=q.querySelector('.quiz-feedback');
      if(fb){ fb.classList.add('show'); fb.classList.add(correct?'correct-fb':'wrong-fb'); }
    });
  });
});

// Code tabs
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.code-tabs').forEach(wrap=>{
    const btns=wrap.querySelectorAll('.code-tab-btn');
    const conts=wrap.querySelectorAll('.code-tab-content');
    btns.forEach((b,i)=>{
      b.addEventListener('click',()=>{
        btns.forEach(x=>x.classList.remove('active'));
        conts.forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        if(conts[i]) conts[i].classList.add('active');
      });
    });
  });
});

// Accordion
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.accordion-btn').forEach(b=>{
    b.addEventListener('click',()=>{
      b.classList.toggle('open');
      const body=b.nextElementSibling;
      if(body) body.classList.toggle('open');
    });
  });
});
