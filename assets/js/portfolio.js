$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
        // //home
        // var homeElem = document.querySelector('#home');
        // var homePos = homeElem.getBoundingClientRect();
        // if(homePos.top < window.innerHeight && homePos.bottom >= 0) {
        //   history.pushState(null, '', '#home');   
        // }
        // //about
        // var aboutElem = document.querySelector('#about');
        // var aboutPos = aboutElem.getBoundingClientRect();
        // if(aboutPos.top < window.innerHeight && aboutPos.bottom >= 0) {
        //   history.pushState(null, '', '#about');   
        // }
        // //service
        // var serviceElem = document.querySelector('#services');
        // var servicePos = serviceElem.getBoundingClientRect();
        // if(servicePos.top < window.innerHeight && servicePos.bottom >= 0) {
        //   history.pushState(null, '', '#services');   
        // }
        // //skills
        // var skillsElem = document.querySelector('#skills');
        // var skillsPos = skillsElem.getBoundingClientRect();
        // if(skillsPos.top < window.innerHeight && skillsPos.bottom >= 0) {
        //   history.pushState(null, '', '#skills');   
        // }
        // //feedbacks
        // var feedbacksElem = document.querySelector('#feedbacks');
        // var feedbacksPos = feedbacksElem.getBoundingClientRect();
        // if(feedbacksPos.top < window.innerHeight && feedbacksPos.bottom >= 0) {
        //   history.pushState(null, '', '#feedbacks');   
        // }
        // //contact
        // var contactElem = document.querySelector('#contact');
        // var contactPos = contactElem.getBoundingClientRect();
        // if(contactPos.top < window.innerHeight && contactPos.bottom >= 0) {
        //   history.pushState(null, '', '#contact');   
        // }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Coder", "Front End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Coder", "Front End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
