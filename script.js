var home= document.querySelector(".home");
var about= document.querySelector(".about");
var jd= document.querySelector(".jd");
var hometxt= document.querySelector(".hometext");
var abouttxt= document.querySelector(".abouttext");
var jdtxt= document.querySelector(".jdtext");
var cntnt= document.querySelectorAll("#cntnt");

home.addEventListener("click", function(){
    clearall();
    hometxt.style.display = "block";

});

about.addEventListener("click", function(){
    clearall();
    abouttxt.style.display = "block";

});

jd.addEventListener("click", function(){
    clearall();
    jdtxt.style.display = "block";

});

function clearall() {
    cntnt.forEach(function(cntnt){
        cntnt.style.display= "none";
    })
}