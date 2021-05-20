// ----------------------------------------------JSK---------------------------------***
// change background color to white and shadow of navbar on scroll down.
window.addEventListener("contextmenu", e => e.preventDefault());
$(document).ready(function () {
  'use strict';

  
  //preloader
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 1000);
	
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $("#header .navbar").css({ "background": "white", "box-shadow": "0 0 10px #222" });
    }
    else {
      $("#header .navbar").css({ "background": "transparent", "box-shadow": "unset" });
    }
  })

//   adding and removing class `scrollUpNavbar` on scroll down and scrollup
var c, currentScrollTop = 0,
  navbar = $('#header .navbar');

$(window).scroll(function () {
  var a = $(window).scrollTop();
  var b = navbar.height();

  currentScrollTop = a;

  if (c < currentScrollTop && a > b + b) {
    navbar.addClass("scrollUpNavbar");
  } else if (c > currentScrollTop && !(a <= b)) {
    navbar.removeClass("scrollUpNavbar");
  }
  c = currentScrollTop;
});

//Typed JS
$(document).ready(function(){
  $("#typed").typed({
    stringsElement: $('#typed-strings'),
    typeSpeed: 100,
    backDelay: 2500,
    loop: true,
    contentType: 'html',
    loopCount: true
  });
});

//  targeting project gallery button for data-filter using isotope library
let $btns = $('.project-area .button-group button');

$btns.click(function (e) {

  $('.project-area .button-group button').removeClass('active');
  e.target.classList.add('active');

  let selector = $(e.target).attr('data-filter');
  $('.project-area .grid').isotope({
    filter: selector
  });
  return false;
})

//targeting project gallery button appear on hover to magnify described image in html using magnific-popup
$('.project-area .button-group #btn1').trigger('click');

$('.project-area .grid .test-popup-link').magnificPopup({
  type: 'image',
  gallery: { enabled: true }
});


/*-----------------Progress Bar ----------------------*/
var ashish = {};
ashish.ProgressBar = function () {
  $(".progress .progress-bar").each(function () {
    var bottom_object = $(this).offset().top + $(this).outerHeight();
    var bottom_window = $(window).scrollTop() + $(window).height();
    var progressWidth = $(this).attr('aria-valuenow') + '%';
    if (bottom_window > bottom_object) {
      $(this).css({
        width: progressWidth
      });
    }
  });
}

$(window).on("scroll", function () {
  ashish.ProgressBar() //invoking method for
});


/*------------------------Owl Carousel------------------*/
$('.owl-carousel').owlCarousel({
  singleItem: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3
    }
  }
})

//just making hack solution for protecting from unresponsive testimonials in low width device.
var header = $('#testimonials');
setTimeout(function () {
  header.removeClass('testimonials-display');
}, 1000);

})
/*===========================Contact Form===============================*/
contactForm = document.getElementById("myForm");
button = document.getElementById('submitForm');
submitBtnDiv = document.getElementById('submitBtnDiv');
button.onclick = function (e) {

  FormData = new FormData(contactForm); //storing forms's data into FormData
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      submitBtnDiv.innerHTML = "<h3 class='responseMssg'>Thank you for contacting us !!</h3>";
    }
  }
  xhr.open("POST", "contact.php", true);
  submitBtnDiv.innerHTML = '<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> Sending...';
  xhr.send(FormData);
  contactForm.reset();
}