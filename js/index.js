//banner
$('.index_banner').slick({
    autoplay: true, 
    arrows: false,
    dots:false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true
        }
      }
    ]
});


$('.index_banner').init(function(slick){
    $('.index_banner .item.slick-current').addClass('active').siblings().removeClass('active')
})
$('.index_banner').on('afterChange',function(slick,currentSlide){
    $('.index_banner .item.slick-current').addClass('active').siblings().removeClass('active');
    var _index = $('.index_banner').slick('slickCurrentSlide')
    $('.section1 .number span').eq(_index).addClass('active').siblings().removeClass('active')
})
$('.section1 .number span').click(function(){
    var _index = $(this).index();
    $('.index_banner').slick('slickGoTo',_index);
    $(this).addClass("active").siblings().removeClass("active")
});
$('.section1 .prev').click(function(){
  $('.index_banner').slick('slickPrev')
})
$('.section1 .next').click(function(){
  $('.index_banner').slick('slickNext');
});

//瀵艰埅
//瓒呰繃涓€瀹氶珮搴﹀鑸坊鍔犵被鍚�
var nav=$("header"); //寰楀埌瀵艰埅瀵硅薄  
var win=$(window); //寰楀埌绐楀彛瀵硅薄  
var sc=$(document);//寰楀埌document鏂囨。瀵硅薄銆�  
win.scroll(function(){  
  if(sc.scrollTop()>=100){  
    nav.addClass("on");   
  }else{  
   nav.removeClass("on");  
  }  
})   

//绉诲姩绔睍寮€nav
$('#navToggle').on('click',function(){
	$('.m_nav').addClass('open');
})
//鍏抽棴nav
$('.m_nav .top .closed').on('click',function(){
	$('.m_nav').removeClass('open');
})

//浜岀骇瀵艰埅  绉诲姩绔�
$(".m_nav .ul li").click(function() {
	$(this).children("div.dropdown_menu").slideToggle('slow')
    $(this).siblings('li').children('.dropdown_menu').slideUp('slow');				
});

//鍏ㄥ睆婊氬姩
$('#index_main').fullpage({
	'navigation': true,
	slidesNavigation: true,
	controlArrows: false,
	continuousHorizontal:true,
	scrollingSpeed:1000,
	showActiveTooltip :true, 
	anchors: ['zero', 'one', 'two', 'three'],
	loopHorizontal: true,
	afterLoad: function(anchorLink, index){
		if(index == 1){
			$('header').removeClass('on');
		}
		if(index == 2){
			$('header').addClass('on');
			$('.section2 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
		}
		if(index == 3){
			$('header').addClass('on');
			$('.section3 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
		}
		if(index == 4){
			$('header').addClass('on');
			$('.section4 h3').addClass('animated fadeInUp').css('animation-delay', '.1s');
		}
	},
	onLeave: function(index, direction){
	}
})