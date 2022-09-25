const btn = document.querySelectorAll("#btn");
const checked = 0;
btn.forEach((item,i)=>{
   item.addEventlistener("click",()=>{
      btn[checked].classList.remove("activate");
      item.classList.add("activate");
      checked= i;

   })
}) 
const barIcon = document.getElementById('bar')
const closeIcon = document.getElementById('close')
const nav = document.getElementById('navbar')

// CLICK EVENTS

// HAMBURGER OPEN
if (bar) {
    barIcon.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
// HAMBURGER CLOSE
if (bar) {
    closeIcon.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}  