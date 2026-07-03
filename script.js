document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

const whatsappPhone='5491159531743';
document.querySelectorAll('a[href*="wa.me/"]').forEach(a=>{
  const current=new URL(a.href);
  const text=current.searchParams.get('text') || 'Hola, quiero consultar por una escalera de diseño';
  a.href=`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(text)}`;
});

const style=document.createElement('style');
style.textContent=`
  .section{padding:58px 0!important}
  .works-grid{grid-auto-rows:230px!important;gap:14px!important}
  .works-grid.compact{grid-template-columns:1.12fr .96fr .96fr!important}
  .mission-panel{border:1px solid rgba(240,189,101,.28);border-radius:18px;background:radial-gradient(circle at 85% 10%,rgba(214,154,50,.18),transparent 34%),linear-gradient(135deg,rgba(24,18,11,.94),rgba(7,7,6,.95));padding:42px}
  .mission-panel p{font-size:clamp(28px,3.7vw,54px);line-height:1.08;letter-spacing:-.052em;color:var(--gold);font-weight:900;max-width:980px;margin:0}
  .mission-panel h2{max-width:720px}
  .quote-card.text-only blockquote{padding-bottom:46px}
  .quote-card.text-only{min-height:auto}
  .author-full.compact-bio p{font-size:18px;line-height:1.62;max-width:900px}
  .author-full.compact-bio .bio-actions{margin-top:26px;display:flex;gap:14px;flex-wrap:wrap}
  .philosophy{grid-template-columns:110px 1.1fr repeat(4,1fr)!important;gap:22px!important;padding:38px 0!important}
  @media (max-width:1100px){.works-grid,.works-grid.compact{grid-template-columns:1fr 1fr!important}.work-main{grid-row:span 1!important}}
  @media (max-width:980px){.hero-copy{padding:46px 24px 30px!important}.hero-image{min-height:380px!important}.works-grid,.works-grid.compact{grid-template-columns:1fr!important}.works-grid{grid-auto-rows:auto!important}.mission-panel{padding:30px 22px}.mission-panel p{font-size:clamp(30px,9vw,48px)}}
  @media (max-width:560px){.section{padding:40px 0!important}}
`;
document.head.appendChild(style);

document.querySelectorAll('.nav a').forEach(a=>{
  if(a.getAttribute('href')==='#galeria' || a.getAttribute('href')==='../#galeria') a.textContent='Misión';
});

const works=document.querySelector('#obras .works-grid');
if(works){
  works.classList.add('compact');
  works.innerHTML=`
    <figure class="work-main"><img src="assets/escalera-5.webp" alt="Escalera interior de madera con iluminación LED bajo los peldaños"><figcaption>Madera, recorrido y luz integrada.</figcaption></figure>
    <figure><img src="assets/escalera-3.webp" alt="Escalera flotante con baranda de vidrio y estructura moderna"><figcaption>Diseño flotante con baranda de vidrio.</figcaption></figure>
    <figure><img src="assets/escalera-2.webp" alt="Escalera moderna con iluminación LED lateral"><figcaption>LED lateral para obra nueva o reforma.</figcaption></figure>
    <figure><img src="assets/escalera-1.webp" alt="Escalera minimalista con iluminación cálida en peldaños"><figcaption>Minimalismo y detalle técnico.</figcaption></figure>
  `;
}

const gallery=document.querySelector('#galeria');
if(gallery){
  gallery.innerHTML=`
    <div class="mission-panel">
      <span class="kicker">Misión</span>
      <h2>Una pieza de arte para contemplar.</h2>
      <p>Nuestra misión no es hacer simples escaleras llamativas, sino crear piezas de arte para contemplar.</p>
    </div>
  `;
}

const authorFull=document.querySelector('#autor .author-full');
if(authorFull){
  authorFull.classList.add('compact-bio');
  authorFull.innerHTML=`
    <span class="kicker">Autoría</span>
    <h2>Arte, espacio y mirada.</h2>
    <p><strong>Gonzalo R. Ríos</strong> integra arte, arquitectura y diseño para pensar cada escalera como una obra funcional: estructura, luz, vidrio y proporción al servicio de una presencia visual capaz de transformar una casa.</p>
    <p>Su mirada parte de la observación del espacio, la composición, los materiales y la forma en que una pieza modifica la experiencia de habitar un lugar.</p>
    <div class="bio-actions"><a class="btn ghost" href="autor/">Leer versión completa</a></div>
  `;
}

const authorImage=document.querySelector('#autor .quote-card.vertical img');
if(authorImage){authorImage.remove();}
const authorQuote=document.querySelector('#autor .quote-card.vertical');
if(authorQuote){authorQuote.classList.add('text-only');}

document.querySelectorAll('p').forEach(p=>{
  if(p.textContent.includes('Procesos propios con estándares')) p.textContent='Fabricación especializada con control de calidad en cada fase del proyecto.';
  if(p.textContent.includes('Producción propia con control')) p.textContent='Fabricación especializada con control de calidad.';
  if(p.textContent.includes('Nuestra misión es que puedas contemplar')) p.textContent='Diseñamos para que la escalera tenga presencia propia dentro de la casa.';
});