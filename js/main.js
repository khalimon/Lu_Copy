$(window).scroll(function () {

    var percent = ($(window).scrollTop() * 100) / ($(document).height() - $(window).height()); //$window.height = $(this).height

    $('.progressbar').css('width', Math.ceil(percent) + '%');

    console.log(percent);

    /*Menu changes*/
    if ($(this).scrollTop() > 30) {
        $('#main-nav').addClass('scroll');
    } else {
        $('#main-nav').removeClass('scroll');
    } 

});

$(document).ready(function() {
     $("#show_hide").click(function () {
     $("#toggle_tst").toggle()
  });
  });

$( "#pat" ).click( function() {    $( "#illustrations" ).hide( "fast" ); } );
$( "#pat" ).click( function() {    $( "#patterns" ).show( "fast" ); } );
$( "#il" ).click( function() {    $( "#patterns" ).hide( "fast" ); } );
$( "#il" ).click( function() {    $( "#illustrations" ).show( "fast" ); } );
