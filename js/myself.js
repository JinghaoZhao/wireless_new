/**
 * Created by MyPC on 2017/7/15.
 */
window.onscroll = function(){
    screenWidth = $(window).width();
    // alert(screenWidth);
    screenHeight = $(window).height();
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if(screenWidth > 800) {
        // alert("00000000");
        if( t >= 210 ) {
            $("#nav").addClass("navbar-fixed");
        } else {
            $("#nav").removeClass("navbar-fixed");
        }
    }
};