$(document).ready(function(){
    hamBurger();
});



function hamBurger() {
  $('.resp-menu').hide();
  $('.menu-icon').click(function() {
            $('.resp-menu').slideToggle(300);
        });
}
