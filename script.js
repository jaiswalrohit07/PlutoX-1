// var nextButton  = document.querySelector('.button-next');
// var prevButton  = document.querySelector('.button-prev');

// nextButton.addEventListener("click", function() {
//   var activeSlide = document.querySelector('.feature-slide.active');
//       featureSlide = document.querySelector('.feature-slide');
  
//   activeSlide.classList.remove('active');
//   activeSlide.nextElementSibling.classList.add('active');  
// });

// prevButton.addEventListener("click", function() {
//   var activeSlide = document.querySelector('.feature-slide.active');
//       featureSlide = document.querySelector('.feature-slide');
  
//   activeSlide.classList.remove('active');
//   activeSlide.prevElementSibling.classList.add('active');  
  
// });

$(".button-next").click(function() {
    var e = $(".feature-slide.active");
    $(e).removeClass("active"), 
    $(e).next().addClass("active"), 
    $(".feature-slide").hasClass("active") || $(".feature-slide:first").addClass("active")
  });
  
  $(".button-prev").click(function() {
    var e = $(".feature-slide.active");
    $(e).removeClass("active"), $(e).prev().addClass("active"), $(".feature-slide").hasClass("active") || $(".feature-slide:last").addClass("active")
  });