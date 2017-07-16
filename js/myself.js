/**
 * Created by MyPC on 2017/7/15.
 */
window.onscroll = function(){
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if(screenWidth > 10) {
        if( t >= 210 ) {
            $("#nav").addClass("navbar-fixed");
        } else {
            $("#nav").removeClass("navbar-fixed");
        }
    }
};