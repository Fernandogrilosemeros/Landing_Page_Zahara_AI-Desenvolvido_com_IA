
const header=document.querySelector('.site-header');
const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>35));
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.main-nav a')];
window.addEventListener('scroll',()=>{let current='inicio';sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+current))});
const testimonials=[...document.querySelectorAll('.testimonial')];
const dots=document.querySelector('.slider-dots');let current=0;
testimonials.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label',`Exibir depoimento ${i+1}`);b.onclick=()=>showTestimonial(i);dots.appendChild(b)});
function showTestimonial(i){current=(i+testimonials.length)%testimonials.length;testimonials.forEach((t,n)=>t.classList.toggle('active',n===current));[...dots.children].forEach((d,n)=>d.classList.toggle('active',n===current))}
document.querySelector('.next').onclick=()=>showTestimonial(current+1);document.querySelector('.prev').onclick=()=>showTestimonial(current-1);showTestimonial(0);setInterval(()=>showTestimonial(current+1),7000);
const modal=document.getElementById('videoModal');document.getElementById('playVideo').onclick=()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false')};function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}document.querySelector('.modal-close').onclick=closeModal;document.querySelector('.modal-backdrop').onclick=closeModal;document.addEventListener('keydown',e=>e.key==='Escape'&&closeModal());
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const status=e.currentTarget.querySelector('.form-status');status.textContent='Mensagem preparada com sucesso. Conecte este formulário ao seu serviço de e-mail ou CRM para concluir o envio.';e.currentTarget.reset()});
document.getElementById('year').textContent=new Date().getFullYear();
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});const ct=document.querySelector('.company-track'),cc=[...document.querySelectorAll('.company-card')],cp=document.querySelector('.company-prev'),cn=document.querySelector('.company-next'),cCur=document.querySelector('.company-current'),cTot=document.querySelector('.company-total'),cProg=document.querySelector('.company-progress i');let cPage=0;const cPer=()=>innerWidth<=760?1:innerWidth<=1100?3:5,cPages=()=>Math.ceil(cc.length/cPer()),cUpdate=()=>{const p=cPer(),pg=cPages(),gap=parseFloat(getComputedStyle(ct).gap)||0;cPage=Math.min(cPage,pg-1);ct.style.transform=`translateX(-${cPage*(cc[0].offsetWidth+gap)*p}px)`;cCur.textContent=String(cPage+1).padStart(2,'0');cTot.textContent=String(pg).padStart(2,'0');cProg.style.width=`${((cPage+1)/pg)*100}%`};cn.addEventListener('click',()=>{cPage=(cPage+1)%cPages();cUpdate()});cp.addEventListener('click',()=>{cPage=(cPage-1+cPages())%cPages();cUpdate()});addEventListener('resize',()=>{cPage=0;cUpdate()});cUpdate();
