$(document).ready(function(){"use strict";setTimeout(function(){$("body").addClass("loaded")},1e3),$(window).scroll(function(){$(window).scrollTop()>300?$("#header .navbar").css({background:"white","box-shadow":"0 0 10px #222"}):$("#header .navbar").css({background:"transparent","box-shadow":"unset"})});var e,t=0,n=$("#header .navbar");$(window).scroll(function(){var o=$(window).scrollTop(),a=n.height();e<(t=o)&&o>a+a?n.addClass("scrollUpNavbar"):e>t&&!(o<=a)&&n.removeClass("scrollUpNavbar"),e=t}),$(document).ready(function(){$("#typed").typed({stringsElement:$("#typed-strings"),typeSpeed:100,backDelay:2500,loop:!0,contentType:"html",loopCount:!0})}),$(".project-area .button-group button").click(function(e){$(".project-area .button-group button").removeClass("active"),e.target.classList.add("active");let t=$(e.target).attr("data-filter");return $(".project-area .grid").isotope({filter:t}),!1}),$(".project-area .button-group #btn1").trigger("click"),$(".project-area .grid .test-popup-link").magnificPopup({type:"image",gallery:{enabled:!0}});var o={ProgressBar:function(){$(".progress .progress-bar").each(function(){var e=$(this).offset().top+$(this).outerHeight(),t=$(window).scrollTop()+$(window).height(),n=$(this).attr("aria-valuenow")+"%";t>e&&$(this).css({width:n})})}};$(window).on("scroll",function(){o.ProgressBar()}),$(".owl-carousel").owlCarousel({singleItem:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!1,loop:!0,margin:10,nav:!0,responsive:{0:{items:1},600:{items:2},1000:{items:3}}});var a=$("#testimonials");setTimeout(function(){a.removeClass("testimonials-display")},1e3)});var counted=0;$(window).scroll(function(){var e=$("#about3").offset().top-window.innerHeight;0==counted&&$(window).scrollTop()>e&&($(".counter").each(function(){var e=$(this),t=e.attr("data-count");$({countNum:e.text()}).animate({countNum:t},{duration:5e3,easing:"swing",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})}),counted=1)}),contactForm=document.getElementById("myForm"),button=document.getElementById("submitForm"),submitBtnDiv=document.getElementById("submitBtnDiv"),button.onclick=function(e){if(valiadate()){FormData=new FormData(contactForm);var t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status&&(submitBtnDiv.innerHTML="<h3 class='responseMssg'>Thank you for contacting us !!</h3>")},t.open("POST","contact.php",!0),submitBtnDiv.innerHTML='<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> Sending...',t.send(FormData),contactForm.reset()}};const setSuccessMsg=e=>{e.parentElement.className="parent success"},isEmail=e=>{var t=e.indexOf("@");if(t<1)return!1;var n=e.lastIndexOf(".");return!(n<=t+3)&&n!==e.length-1},valiadate=()=>{const e=document.getElementById("name"),t=document.getElementById("email"),n=document.getElementById("address"),o=document.getElementById("message"),a=e.value.trim(),s=t.value.trim(),r=n.value.trim(),i=o.value.trim();var c=!0;function u(e,t){const n=e.parentElement;n.className="parent error",n.querySelector("small").innerText=t,c=!1}return""===a?u(e,"Name cannot be empty!"):e.length<=2?u(e,"Name must contain min 3 char!"):setSuccessMsg(e),""===s?u(t,"Email cannot be empty!"):isEmail(s)?setSuccessMsg(t):u(t,"Not a valid email!"),""===r?u(n,"Address cannot be empty!"):r.length<=3?u(n,"Address must contain min 3 char!"):setSuccessMsg(n),""===i?u(o,"Message cannot be empty!"):i.length<=10?u(o,"Message must contain min 10 char!"):setSuccessMsg(o),!0===c};window.addEventListener("contextmenu",e=>e.preventDefault()),document.onkeydown=function(e){return 123!=event.keyCode&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="I".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="C".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="J".charCodeAt(0))&&((!e.ctrlKey||e.keyCode!="U".charCodeAt(0))&&void 0))))};