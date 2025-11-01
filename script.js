// Carousel simples com autoplay + controlos + dots
const slides = [...document.querySelectorAll('.slide')];
const dotsWrap = document.querySelector('.dots');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const status = document.getElementById('form-status');
const form = document.getElementById('quote-form');
const year = document.getElementById('year');

let i = 0, timer = null;
function go(n){
  i = (n + slides.length) % slides.length;
  slides.forEach((s,idx)=> s.classList.toggle('active', idx===i));
  [...dotsWrap.children].forEach((d,idx)=> d.setAttribute('aria-selected', idx===i));
}
function next(){ go(i+1) }
function prev(){ go(i-1) }

// Criar dots
slides.forEach((_,idx)=>{
  const b = document.createElement('button');
  b.setAttribute('role','tab');
  b.setAttribute('aria-label','Imagem ' + (idx+1));
  b.addEventListener('click', ()=>{ stop(); go(idx); start(); });
  dotsWrap.appendChild(b);
});
go(0);

function start(){ timer = setInterval(next, 4500); }
function stop(){ clearInterval(timer); }
start();
nextBtn.addEventListener('click', ()=>{ stop(); next(); start(); });
prevBtn.addEventListener('click', ()=>{ stop(); prev(); start(); });

// Footer year
year.textContent = new Date().getFullYear();

// Form handling (front-end only). Replace 'action' to use a service.
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const consent = document.getElementById('consent');
  if(!consent.checked){
    status.textContent = 'Por favor, aceita o consentimento.';
    return;
  }
  // Basic front-end validation
  const data = new FormData(form);
  for (const [k,v] of data.entries()){
    if(['nome','email','telefone','data','localidade'].includes(k) && !v){
      status.textContent = 'Preenche os campos obrigatórios (*)';
      return;
    }
  }
  status.textContent = '✅ Pedido registado no navegador (exemplo). Configure o envio no README.';
  form.reset();
});
