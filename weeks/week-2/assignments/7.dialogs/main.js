let action1 = document.querySelector(".action-one")
let action2 = document.querySelector(".action-two")
let action3 = document.querySelector(".action-three")

let dialogBox = document.getElementsByClassName('modal')
let close = document.getElementsByClassName('close')

// Action 1
action1.addEventListener('click', ()=>{
    dialogBox[0].style.display = "block"
    //On click anywhere Outside close modal
window.addEventListener('click',(e)=>{
    if(e.target==dialogBox[0] ){
        dialogBox[0].style.display = "none"
    }
})
})
close[0].addEventListener('click', ()=>{
dialogBox[0].style.display = "none"
    
})

// Action 2
action2.addEventListener('click', ()=>{
    dialogBox[1].style.display = "block"
    //On click anywhere Outside close modal
    window.addEventListener('click',(e)=>{
        if(e.target==dialogBox[1] ){
            dialogBox[1].style.display = "none"
        }
})
})
close[1].addEventListener('click', ()=>{
dialogBox[1].style.display = "none"
    
})
// Action 3
action3.addEventListener('click', ()=>{
    dialogBox[2].style.display = "block"
    //On click anywhere Outside close modal
    window.addEventListener('click',(e)=>{
        if(e.target==dialogBox[2] ){
            dialogBox[2].style.display = "none"
        }
})
})
close[2].addEventListener('click', ()=>{
dialogBox[2].style.display = "none"
    
})

//On click anywhere Outside close modal
// window.addEventListener('click',(e)=>{
//     if(e.target==dialogBox[0] ){
//         dialogBox[0].style.display = "none"
//     }
// })
