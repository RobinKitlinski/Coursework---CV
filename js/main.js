$(document).ready(function(){
    hamBurger();
});



function hamBurger() {
  $('.resp-menu').hide();
  $('.menu-icon').click(function() {
            $('.resp-menu').slideToggle(300);
        });
}

// Tweaked from the original:
// https://codepen.io/jpschwinghamer/pen/QwwbgO
