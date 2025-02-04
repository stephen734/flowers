
let openBtn = document.getElementById('yes');
let closeBtn = document.getElementById('no');
let menu = document.getElementById('hello');

openBtn.addEventListener("click",()=>{
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    menu.classList.toggle('hidden');
});
closeBtn.addEventListener("click",()=>{
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    menu.classList.toggle('hidden');
});

//inialzing swiper
const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  breakpoints:{
    0:{
        slidesPerView:1
    },
    1024:{
        slidesPerView:2
    },
    768:{
        slidesPerView:3
    }
  }
   
  });
