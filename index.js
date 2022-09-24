const btn = document.querySelectorAll("#btn");
const checked = 0;
btn.forEach((item,i)=>{
   item.addEventlistener("click",()=>{
      btn[checked].classList.remove("activate");
      item.classList.add("activate");
      checked= i;

   })
})   