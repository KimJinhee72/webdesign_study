window.onload = function () {
    const info = new Swiper(".info" , {
        
        slidesPerView: 3.5,
        breakpoints: {
            390: {
                slidesPerView: 1.5,
        },
            768: {
                slidesPerView: 4,

        },
            
    }
    }); 
}