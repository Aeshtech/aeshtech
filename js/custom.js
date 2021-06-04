// --------------------------------------Jai shree Krishna---------------------------------------//

// change background color to white and shadow of navbar on scroll down.
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

// ============targeting project gallery button for data-filter using isotope library===========//
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

})

//========== counter for about section=====================//
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#about3').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }
});

/*===========================Contact Form with validation===============================*/
contactForm = document.getElementById("myForm");
button = document.getElementById('submitForm');
submitBtnDiv = document.getElementById('submitBtnDiv');

// Function to proceed azax request after successfully validation.//
button.onclick = function (e) {
  //when this conditon is true than only azax request can make.
  if(valiadate()){
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
}
// setting success class in parent for specified element recieved as argument in input para.
const setSuccessMsg = (input) => {
  const parent = input.parentElement;
  parent.className = "parent success";
}
//checking for email format correctness.
const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if(atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf('.');
  if(dot <= atSymbol + 3) return false;
  if(dot === emailVal.length-1) return false;
  return true;
}

// ========Main function for validation==========//
const valiadate = () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const mssg = document.getElementById("message");
  const nameVal = name.value.trim();
  const emailVal = email.value.trim();
  const addressVal = address.value.trim();
  const mssgVal = mssg.value.trim();
  var returnValue = true;

  //validate name
  if(nameVal===""){
    setErrorMsg(name,'Name cannot be empty!');
  }else if(name.length <=2){
    setErrorMsg(name,'Name must contain min 3 char!');
  }else{
    setSuccessMsg(name);
  }

  //validate email
  if(emailVal===""){
    setErrorMsg(email,'Email cannot be empty!');
  }else if(! isEmail(emailVal)){
    setErrorMsg(email,'Not a valid email!');
  }else{
    setSuccessMsg(email);
  }

//validate address
if(addressVal ===""){
  setErrorMsg(address,'Address cannot be empty!');
}else if(addressVal.length <=3){
  setErrorMsg(address,'Address must contain min 3 char!');
}else{
  setSuccessMsg(address);
}

//validate message
if(mssgVal ===""){
  setErrorMsg(mssg,'Message cannot be empty!');
}else if(mssgVal.length <= 10){
  setErrorMsg(mssg,'Message must contain min 10 char!');
}else{
  setSuccessMsg(mssg);
}
// setting error message for specified element recieved as argument in input para.
function setErrorMsg(input,errormsg){
  const parent = input.parentElement;
  parent.className = "parent error"; //// setting success class in parent
  const small = parent.querySelector('small');
  small.innerText = errormsg;
  returnValue = false;
}

/*this will return true only when returnvalue variable contain true else if it is overridden by
any of setErrorMsg to false than this will return false.*/
  if(returnValue === true){
    return true;
  }else{
    return false;
  }
}

//============Some practise to hide source code.===============
window.addEventListener("contextmenu", e => e.preventDefault());
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}