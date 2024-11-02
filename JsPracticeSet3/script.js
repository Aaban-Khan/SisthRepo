let main=document.querySelector(".main");
let crsr=document.querySelector(".crsr");

main.addEventListener("mousemove",(dets)=>{
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
})