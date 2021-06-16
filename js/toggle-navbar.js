$(document).ready(function(){
    $('header #top-part #toggle').click(function(){
        $('header #top-part #navbar').toggleClass('open');
        $('header #bottom-part h1').toggleClass('hide');
        $('header #bottom-part img').toggleClass('hide');
    });
})