// AOS Init
AOS.init();

// Dark mode toggle
const themeToggle=document.getElementById('themeToggle');
themeToggle.addEventListener('click',()=>{document.body.classList.toggle('dark-mode');themeToggle.textContent=document.body.classList.contains('dark-mode')?'☀️':'🌙';});

// Typed Text
const typedText=document.getElementById('typed');const words=["Web Developer","Freelancer","Java Programmer"];let i=0,j=0;
function type(){if(i<words.length){if(j<words[i].length){typedText.textContent+=words[i][j];j++;setTimeout(type,150);}else{setTimeout(erase,1000);}}}
function erase(){if(j>0){typedText.textContent=words[i].substring(0,j-1);j--;setTimeout(erase,100);}else{i=(i+1)%words.length;setTimeout(type,500);}}
type();

// Project Filter
const filterButtons=document.querySelectorAll('[data-filter]');
const projectCards=document.querySelectorAll('.project-card');
filterButtons.forEach(button=>{button.addEventListener('click',()=>{filterButtons.forEach(btn=>btn.classList.remove('active'));button.classList.add('active');const filter=button.getAttribute('data-filter');projectCards.forEach(card=>{if(filter==='all'||card.getAttribute('data-category')===filter){card.style.display='';}else{card.style.display='none';}});});});

// Particle Lines
function createLines(canvas,count){let lines=[];for(let i=0;i<count;i++){lines.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,length:Math.random()*60+20,dx:(Math.random()-0.5)*1.5,dy:(Math.random()-0.5)*1.5})}return lines;}
function drawLines(canvas,ctx,lines){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.strokeStyle='rgba(32,201,151,0.5)';ctx.lineWidth=1;lines.forEach(l=>{ctx.beginPath();ctx.moveTo(l.x,l.y);ctx.lineTo(l.x+l.length,l.y);ctx.stroke();l.x+=l.dx;l.y+=l.dy;if(l.x>canvas.width)l.x=0;if(l.x<0)l.x=canvas.width;if(l.y>canvas.height)l.y=0;if(l.y<0)l.y=canvas.height;});requestAnimationFrame(()=>drawLines(canvas,ctx,lines));}

// Hero particles
const heroCanvas=document.getElementById('particles');heroCanvas.width=window.innerWidth;heroCanvas.height=window.innerHeight;
const heroCtx=heroCanvas.getContext('2d');const heroLines=createLines(heroCanvas,100);drawLines(heroCanvas,heroCtx,heroLines);

// Skills particles
const skillsCanvas=document.getElementById('skillsLines');skillsCanvas.width=window.innerWidth;skillsCanvas.height=window.innerHeight;
const skillsCtx=skillsCanvas.getContext('2d');const skillsLines=createLines(skillsCanvas,60);drawLines(skillsCanvas,skillsCtx,skillsLines);

// Projects particles
const projectCanvas=document.getElementById('projectLines');projectCanvas.width=window.innerWidth;projectCanvas.height=window.innerHeight;
const projectCtx=projectCanvas.getContext('2d');const projectLines=createLines(projectCanvas,80);drawLines(projectCanvas,projectCtx,projectLines);

window.addEventListener('resize',()=>{heroCanvas.width=window.innerWidth;heroCanvas.height=window.innerHeight;projectCanvas.width=window.innerWidth;projectCanvas.height=window.innerHeight;skillsCanvas.width=window.innerWidth;skillsCanvas.height=window.innerHeight;});

// Contact form submit (mocked, replace URL with your server-side handler)
const form=document.getElementById('contactForm');
const alertBox=document.getElementById('formAlert');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const btn=form.querySelector('button');
  btn.disabled=true; btn.textContent="Sending...";
  // MOCKED RESPONSE, replace fetch with your PHP handler
  setTimeout(()=>{
    alertBox.innerHTML='<div class="alert alert-success">Message sent successfully!</div>'; 
    form.reset();
    btn.disabled=false; btn.textContent="Send Message";
  },1500);
});
