// $(document).ready(function() {
//    blueIon.init();
//
// });
//
//
// var blueIon = {
//   init: function () {
//     this.initStyling();
//     this.initEvents();
//   },
//
//   initStyling: function (){
//
//   },
//
//   initEvents: function (){
//
//   },

$("#news").click(function (){
 event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $(".blogSection").offset().top
                    }, 700);

            });

$("#skaters").click(function (){
 event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $(".skatercontain").offset().top
                    }, 700);

            });

$("#boarddesign").click(function (){
 event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $(".boards").offset().top
                    }, 700);

            });

$("#contact").click(function (){
 event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $(".contactform").offset().top
                    }, 700);

            });

$(".board").tooltip({
   "placement":"top",
   "container": "body",
   "html": true

});
$(".container").on("mouseover", ".board", function (e) {
 e.preventDefault();
 var topPos = $(".tooltip").css("top");
 var newTop = parseInt(topPos) + 100 + "px";
 console.log(newTop)
 $(".tooltip").css("top", newTop);
})

$(".blogPost").find("a").click(function(){
  event.preventDefault();
  $(this).parent().toggleClass("expand");
  $(this).parent().siblings().toggleClass("hidden");
});
