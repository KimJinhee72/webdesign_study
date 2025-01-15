window.onload = function(){
//모달창 닫기
const modal = document.querySelector(".modal-wrap")
const modalClose = document.querySelector(".modal-close")
modalClose.addEventListener("click", function(){
    modal.style.display = "none"
})
//비주얼버튼
const visualButton = document.querySelector(".visual-bt")
visualButton.addEventListener("click" , function(){
scrollTosection("#business")//id값으로 명명해야함
})
//scrollTosection()
function scrollTosection(sectionId){
    console.log(sectionId)
const section = document.querySelector(sectionId)
if(section){
    section.scrollIntoView({behavior:"smooth"})
}
}
//gotop버튼
const topBtn = document.querySelector(".top-btn")
topBtn.addEventListener("click", function(event){
    event.preventDefault()//a 아무것도 없게함 무조건 필요
    window.scrollTo({
        top:0 ,
        behavior: "smooth"
    })
})
}

