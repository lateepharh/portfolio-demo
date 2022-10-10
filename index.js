const btn = document.querySelectorAll("#btn");
const checked = 0;
btn.forEach((item,i)=>{
   item.addEventlistener("click",()=>{
      btn[checked].classList.remove("activate");
      item.classList.add("activate");
      checked= i;

   })
}) ;
var dropdown = document.getElementsByClassName("dropdown");
var i;
for(i = 0; i < dropdown.length; i++){
    dropdown[i].addEventListener("click", ()=>{
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display === "none";
        }else{
            content.style.display === "block";
        }
    })
}