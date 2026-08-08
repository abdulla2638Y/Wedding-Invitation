const weddingDate = new Date("2026-09-15T21:00:00+05:30").getTime();
function updateCountdown(){
  const diff = Math.max(0, weddingDate - Date.now());
  const d=Math.floor(diff/86400000), h=Math.floor(diff%86400000/3600000),
        m=Math.floor(diff%3600000/60000), s=Math.floor(diff%60000/1000);
  document.getElementById("days").textContent=String(d).padStart(2,"0");
  document.getElementById("hours").textContent=String(h).padStart(2,"0");
  document.getElementById("minutes").textContent=String(m).padStart(2,"0");
  document.getElementById("seconds").textContent=String(s).padStart(2,"0");
}
updateCountdown(); setInterval(updateCountdown,1000);

const music=document.getElementById("music"), btn=document.getElementById("musicBtn");
btn.addEventListener("click", async ()=>{
  if(music.paused){try{await music.play();btn.textContent="❚❚"}catch(e){alert("Add your music file as assets/music.mp3 first.");}}
  else{music.pause();btn.textContent="♫";}
});

const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}});
},{threshold:.12});
document.querySelectorAll(".section,.photo-section,.event,.final").forEach(el=>{
  el.style.opacity="0";el.style.transform="translateY(25px)";el.style.transition="opacity .8s ease, transform .8s ease";io.observe(el);
});
const style=document.createElement("style");
style.textContent=".show{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);
