$(function(){

	//等比例缩放图片
	var scaleW = window.innerWidth/320;
    var scaleH = window.innerHeight/480;
    var resizes = document.querySelectorAll('.resize');
    for (var j=0; j<resizes.length; j++) {
        resizes[j].style.width=parseInt(resizes[j].style.width)*scaleW+'px';
        resizes[j].style.height=parseInt(resizes[j].style.height)*scaleH+'px';
        resizes[j].style.top=parseInt(resizes[j].style.top)*scaleH+'px';
        resizes[j].style.left=parseInt(resizes[j].style.left)*scaleW+'px'; 
    }

    //初始化swiper
    var mySwiper = new Swiper ('.swiper-container', {
        direction : 'vertical',
        pagination: '.swiper-pagination',
        loop : true,
        onInit: function(swiper){
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper);
        }
    });     

    //播放音乐
    var firstTouch = true;
    $("body").bind("touchstart", function(){
        if( firstTouch ){
            document.getElementById("playmusic").play();
            $("#swiperMusic").addClass("swiperMusicAni");
            firstTouch = false;
        }
    });
    $("#swiperMusic").bind("touchstart", function(){
        var playmusic = document.getElementById("playmusic");
        if( playmusic.paused ){
            playmusic.play();
            $(this).addClass("swiperMusicAni");
        }else{
            playmusic.pause();
            $(this).removeClass("swiperMusicAni");
        }
    });
});