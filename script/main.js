const hamburger=document.getElementById('hamburger');
const listEl=document.querySelector('.nav__lists');

hamburger.addEventListener('click',e=>{
    listEl.classList.toggle('nav__lists--shown');
});