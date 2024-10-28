var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () =>{
    menu.classList.toggle("bx-x")
    navbar.classList.toggle("active")
  }

  window.onscroll = () =>{
    menu.classList.remove("bx-x")
    navbar.classList.remove("active")
  }
  const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
  })
  
  animate.reveal(".logo,.home-text1,.heading,.about-text",{origin: "left"});
  animate.reveal(".about-img",{origin: "top"});
  animate.reveal(".profile,.proimg1,.about-img-",{origin: "right"});
  animate.reveal(".cSalad1,.cSalad2,.cSalad3",{origin: "bottom"});
  animate.reveal(".navbar,.box,.about-text",{interval: 100});
