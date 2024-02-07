const input = document.querySelector("#input")
const lbl = document.querySelector(".lbl")
const baslik = document.querySelectorAll(".accordion-baslik")
const icerik = document.querySelectorAll(".accordion-icerik")
const ikon = document.querySelectorAll("icon")
input.addEventListener("focusin",function(){
    lbl.classList.add("lbl-active")
})

input.addEventListener("focusout",function(){
    if(input.value == ""){
        lbl.classList.remove("lbl-active")
    }
})

$(".accordion-baslik").click(function(){
   let chosenIcon = $(this).children(".icon")
   let icon = $(".accordion-baslik").children(".icon")
   let hiden = $(this).parent().children(".accordion-icerik")

   if(chosenIcon.hasClass("carpi")){
        hiden.slideUp()
        chosenIcon.removeClass("carpi")
        
   }else{
    icon.removeClass("carpi")
        $("icon").removeClass("carpi")
        $(".accordion-icerik").slideUp()
        hiden.slideToggle()
        chosenIcon.toggleClass("carpi")
   }
})


