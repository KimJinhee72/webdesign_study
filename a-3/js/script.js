$(document).ready(function(){
    // alert("제이쿼리실행")
    // 메뉴 슬라이드
    $(".gnb > li").hover(
        function(){
            console.log(this);
            $(this).find(".depth2").stop().slideDown();
        },
        function(){
            $(this).find(".depth2").stop().slideUp();
        });
    // 비주얼 슬라이드 영역
    // siblings()형제
    // eq(0)이미지1번만 보이게함
    $(".slide-all > li").eq(0).siblings().hide();
    // console.log(".slide-all > li")
    // 변수예약어 slideI로 0(인데스0)으로 할당(=)
    // 때문에 나옴
    var slideI = 0

    // setInterval 시간차(3s)로라는 함수
    setInterval(function(){
        // 조건문 slideI가 이미지 3번보다 작으면 slideI++ 슬라이드를 
        // 더해라
        if(slideI < 2){
            slideI++; 
        }
        else{
            slideI = 0;
        }
        // 나머지는 지정을 해줘야 보여져서
        $(".slide-all > li").eq(slideI).siblings().fadeOut();
        $(".slide-all > li").eq(slideI).fadeIn();
    } , 3000);  
    // 공지사항 탭 메뉴
    $(".c1 h4").click(function(){
        // console.log("click")
        // 클릭할때 변화를 만들때 removeClass로 처음에 없음 설정해두고
        // 클릭했을때에는  색이 변함(이미 h4class html,css 모두 on있어)
        $(".c1 h4 , .c1 ul").removeClass("on")
        $(this).addClass("on").next("ul").addClass("on")
    })
    // 모달창 닫기
    $(".close").click(function(){
        $("#modal").fadeOut()
    })
    // 모달창 열기
    $(".popup").click(function(){
    // console.log("click")
    $("#modal").fadeIn()
    })
});