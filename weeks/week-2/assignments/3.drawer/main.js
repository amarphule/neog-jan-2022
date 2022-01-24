let drawer = document.querySelector(".drawer");
let body = document.querySelector(".content__body");

let openHamberger = document.querySelector(".hamberger")
let close = document.querySelector(".close")

openHamberger.addEventListener('click', ()=>{
    drawer.style.display="block"
    drawer.style.zIndex="3"
    body.style.marginLeft="20%"
    openHamberger.style.display="none"
})

// // Overlay background
// openHamberger.addEventListener('click', ()=>{
//     drawer.style.display="block"
//     body.style.backgroundColor = "rgba(0,0,0,0.4)"
//     openHamberger.style.display="none"
// })

close.addEventListener('click', ()=>{
    drawer.style.display="none"
    body.style.marginLeft="auto"
    openHamberger.style.display="inline-block"
    body.style.backgroundColor = "#e7dfdf"
    drawer.style.transition = "0.5s"

})