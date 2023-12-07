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
   let icon = $(this).children(".icon")
   let hiden = $(this).parent().children(".accordion-icerik")

   if(icon.hasClass("carpi")){
        hiden.slideUp()
        icon.removeClass("carpi")
   }else{
        $("icon").removeClass("carpi")
        $(".accordion-icerik").slideUp()
        hiden.slideToggle()
        icon.toggleClass("carpi")
   }
})

// baslik.forEach((title)=>{
//     title.addEventListener("click",function(){
//         let hide = this.parentElement.children[1]
//         let icon = this.children[1]

//         if(icon.classList.contains("carpi")){
//             icon.classList.remove("carpi")
//             hide.classList.remove("accordion-show","p-3")
//         }else{
//             icerik.forEach(e=>{
//                 e.classList.remove("accordion-show","p-3")  
//             })
//             ikon.forEach(e=>{
//                 e.classList.remove("carpi") 
//             })
//             hide.classList.toggle("accordion-show")
//             hide.classList.toggle("p-3")
//             icon.classList.toggle("carpi")
//         }
//     })
// })
