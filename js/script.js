// went scrolling hello barnav at the top byebye backgrd barnav
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.barnav').addClass("sticky");
        }else{
            $('.barnav').removeClass("sticky");
        }
    })
});