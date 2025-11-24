// Tiny JS for menu toggling, year update and demo contact handling
(function(){
// set year in footers
const y = new Date().getFullYear();
['year','year2','year3'].forEach(id=>{const el=document.getElementById(id); if(el) el.textContent=y});


// mobile menu toggle (shows/hides the nav on small screens)
function bindToggle(btnId){
const btn=document.getElementById(btnId);
if(!btn) return;
btn.addEventListener('click', ()=>{
const nav = btn.closest('.nav-row').querySelector('.main-nav');
if(!nav) return;
const shown = nav.style.display === 'flex';
nav.style.display = shown ? 'none' : 'flex';
nav.style.flexDirection = 'column';
})
}
bindToggle('menuToggle'); bindToggle('menuToggle2'); bindToggle('menuToggle3');


// contact form demo handler
window.handleContact = function(e){
e.preventDefault();
const name = document.getElementById('name').value;
const result = document.getElementById('contactResult');
result.textContent = `Thanks, ${name}! This is a demo form — wire it to a backend to send messages.`;
e.target.reset();
return false;
}
})();