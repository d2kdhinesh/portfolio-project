
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){ 
    this.classList.toggle("click");
     nav.classList.toggle("open");
})


var typed = new Typed("#autotype",{
    strings : ["Frontend Developer","Designer", "Web Developer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 100,
    loop : true

})

