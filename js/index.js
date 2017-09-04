$(document).ready(function(){
/********************************************* 首页 start **************************************************/
/* 典型用户 开始*/
(function(){
	var timer=setInterval(move,3000);
	function move(){
		var left=parseInt($('.imgbox>ul').css('left'));
		left==0?$('.imgbox>ul').animate({left:'-100%'}):$('.imgbox>ul').animate({left:'0px'});	
	}
	$('.imgbox,.pre,.next').hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(move,3000);
		}
	)
	$('.pre').click(function(){
		var left=parseInt($('.imgbox>ul').css('left'));
		clearInterval(timer);
		left==0&&$('.imgbox>ul').animate({left:'-100%'});
	})
	$('.next').click(function(){
		var left=parseInt($('.imgbox>ul').css('left'));		
		clearInterval(timer);		
		left!=0&&$('.imgbox>ul').animate({left:'0px'});
	})
})();
//典型用户 结束

// WHY
$(window).scroll(function(){
	var scrollTop=$(document).scrollTop();
	if(scrollTop>=650){
		$('.why .row2 .left .text').animate({left:'-30px',opacity:'1'},1000);
		$('.why .row2 .left .img').css('animation','Lrotate 1s');
		$('.why .row2 .right .text').animate({right:'-30px',opacity:'1'},1000);
		$('.why .row2 .right .img').css('animation','Rrotate 1s');
	}
	if(scrollTop>=850){
		$('.why .row3 .left .text').animate({left:'-30px',opacity:'1'},1000);
		$('.why .row3 .left .img').css('animation','Lrotate 1s');
		$('.why .row3 .right .text').animate({right:'-30px',opacity:'1'},1000);
		$('.why .row3 .right .img').css('animation','Rrotate 1s');
	}
});
// WHY 结束

//WHo 开始
//点击图标切换第二页
$('.who .who-body .wrap li').click(function(){					
	var $_index = $(this).index();
	var $_head = $('.who .who-body .wrap-detail .head-portrait li').eq($_index); //要切换的头像
	$('.who').css('background-color','#469ACB');				//改变背景色
	$('.who .container .row h1').css('color','#fff');			//改变标题颜色
	$_head.animate({'background-positionY':'-70px'},150).siblings().animate({'background-positionY':'0px'},150);//切换头像
	$('.who .who-body .wrap li').animate({width:'0'},500).parent().animate({width:0,left:'-=60px',opacity:'.2'},500);//隐藏第一页
	$('.who .who-body .wrap-detail').css('width',0).removeClass('hide').animate({width:'1010px'},function(){		//显示第二页		
		var $_img = $('.who .who-body .wrap-detail .detail-imgbox li').eq($_index);	//要切换的的图片
		var $_txt = $('.who .who-body .wrap-detail .detail-txtbox li').eq($_index);	//要切换的的文字		
		$(':animated').before(function(){
			$_img.css({left: '-150px',opacity: '0'});
			$_txt.css({right: '-150px',opacity: '0'});
		});
		$_img.removeClass('hide').animate({left: '0', opacity: '1'},1000).siblings().addClass('hide');	
		$_txt.removeClass('hide').animate({right: '0', opacity: '1'},1000).siblings().addClass('hide');
	});
	$('.who .who-body .wrap-detail .detail-imgbox,.who .who-body .wrap-detail .detail-txtbox').removeClass('hide');
});

//点击重选切换第一页
$('.who .who-body .wrap-detail .re-elec').click(function(){			
	$('.who').css('background-color','#F1F1F1');					//改变背景色
	$('.who .container .row h1').css('color','#505455');			//改变标题颜色
	$('.who .who-body .wrap-detail').animate({width:'0'},function(){//隐藏第二页
		$('.who .who-body .wrap-detail').addClass('hide');
	});
	$('.who .who-body .wrap-detail .detail-imgbox,.who .who-body .wrap-detail .detail-txtbox').children().addClass('hide');
	$('.who .who-body .wrap li').animate({width:'167px'},500).parent().animate({width:'836px',left:'+=60px',opacity:'1'},500);//显示第一页
});
//小头像悬浮 切换图文
$('.who .who-body .wrap-detail .head-portrait li').mouseenter(function(){		
	var $_index = $(this).index();
	var $_img = $('.who .who-body .wrap-detail .detail-imgbox li').eq($_index);	//动画的图片
	var $_txt = $('.who .who-body .wrap-detail .detail-txtbox li').eq($_index);	//动画的文字
	$(this).siblings().clearQueue();
	$(this).animate({'background-positionY':'-70px'},150).siblings().animate({'background-positionY':'0px'},150);//切换背景
	$(':animated').before(function(){
		$_img.css({left: '-150px',opacity: '0'});
		$_txt.css({right: '-150px',opacity: '0'});
	});
	$_img.siblings().clearQueue();
	$_txt.siblings().clearQueue();
	$_img.removeClass('hide').animate({left: '0', opacity: '1'},1000).siblings().addClass('hide');	
		$_txt.removeClass('hide').animate({right: '0', opacity: '1'},1000).siblings().addClass('hide');
});


//Who 结束

/********************************************** 首页 end ******************************************************/

/********************************************** 产品 start ****************************************************/
//导航栏点击添加active样式
$('.content .tabbox ul li a').click(function(){
	$(this).addClass('active').parent().siblings().children().removeClass('active');
	var $index = $(this).parent().index();
	$('.tab-content').children().eq($index).show().siblings().hide();
});

//版本对比表格特效
(function(){
	var $_hover = $('#version-table tr').children().filter(':not(:first-child)'),
		$_index,
		$_class = $('#version-table tr td:nth-child(2),#version-table tr th:nth-child(2)');
	$_hover.mouseenter(function(){
		$_class.removeClass('active');
		$_index = $(this).index();
		switch($_index){
			case 1:
				$_class = $('#version-table tr td:nth-child(2),#version-table tr th:nth-child(2)');
			break;
			case 2:
				$_class = $('#version-table tr td:nth-child(3),#version-table tr th:nth-child(3)');
			break;
			case 3:
				$_class = $('#version-table tr td:nth-child(4),#version-table tr th:nth-child(4)');
			break;
			case 4:
				$_class = $('#version-table tr td:nth-child(5),#version-table tr th:nth-child(5)');
			break;
			case 5:
				$_class = $('#version-table tr td:nth-child(6),#version-table tr th:nth-child(6)');
			break;
			case 6:
				$_class = $('#version-table tr td:nth-child(7),#version-table tr th:nth-child(7)');
			break;
		}
		$_class.addClass('active');
		console.log($_class)
	});
})();
//版本对比-点击问号弹框
$('.content .tab-content #version .version-wrap tbody tr th .ques').click(function(){
	$('.content .tab-content #version .version-wrap tbody tr th .quesdetail-wrap').toggle();
});
/********************************************** 产品 end ******************************************************/

/********************************************** 下载 start ****************************************************/
// banner开始
(function(){
	$('.d-content .banner .left .clock').animate({opacity:1},2000);
	$('.d-content .banner .left .year-1').delay(500).animate({opacity:1},1500);
	$('.d-content .banner .left .year-2').delay(1000).animate({opacity:1},1500);
	$('.d-content .banner .left .year-3').delay(1500).animate({opacity:1},1500);
	$('.d-content .banner .left .year-4').delay(2000).animate({opacity:1},1500);
	$('.d-content .banner .left .year-5').delay(2500).animate({opacity:1},1500);
	$('.d-content .banner .left .year-6').delay(3000).animate({opacity:1},2000);
	setInterval(function(){$('.d-content .banner .left .year-6 .cycle').animate({opacity:0},1000).animate({opacity:1},1000);},2000);
})();
// banner结束 

// 内容点击显示、隐藏 开始
(function(){
	$('.d-content .content-body .body-c .history-box .box-detail .detail-title').click(function(){
		$(this).next().children().filter('ul').animate({height:'toggle',opacity:'toggle'},500);
	});
	$('.d-content .content-body .body-c .history-box .date-title').click(function(){
		$(this).siblings().filter('.box-cycle').toggle();
		$(this).siblings().filter('.box-detail').animate({height:'toggle',opacity:'toggle'},500);
	});
})();

/******************************************* 下载 end ************************************************/

/************************************ 购买 ***************************************/
// banner轮播　开始
(function(){
	var showWidth = $('.con-banner').width(),
		timer=setInterval(move,4000),
		len = $('.banner-imgbox>a').length,
		i=0;
// 轮播函数
	function move(){
		++i;
		i>len-1?i=0:i;
		$('.banner-imgbox').animate({left: -showWidth*i},700);
		$('.banner-index li').eq(i).addClass('active').siblings().removeClass('active');
	}
// index 点击切换
	$('.banner-index li').click(function(){
		var index = $(this).index(),
			Left = showWidth * index;
		$(this).addClass('active').siblings().removeClass('active');		
		$('.banner-imgbox').stop().animate({left: -Left+'px'},700);
	});
// 鼠标悬浮停止轮播
	$('.con-banner').hover(
		function(){clearInterval(timer);},
		function(){timer=setInterval(move,4000);}
	)
})();
// banner轮播 结束
/**************************************** 购买 end *************************************/









/*************************************** common start ****************************************/

//左侧边栏
$('.left-sidebar').click(function(){
	$('.msg-b').removeClass('hide');
});
$('.msg-b .btn-hide').click(function(){
	$('.msg-b').addClass('hide');
});

/* 右侧边栏 */
// 滑入效果
$('.right-sidebar>ul>li').mouseenter(function(){
	$('.right-sidebar>ul>li').children().filter("div[class*='summary']").addClass('hide');
	$(this).children().filter(".hide").removeClass('hide');
});
$('.right-sidebar>ul>li').children().filter("div[class*='summary']").mouseleave(function(){
	$(this).addClass('hide');
});
$(window).scroll(function(){
	$(document).scrollTop()>=200?$('.right-sidebar .sidebar-backup').removeClass('hide'):$('.right-sidebar .sidebar-backup').addClass('hide');
});

// 返回顶部
$('.right-sidebar>ul>li.sidebar-backup').click(function(){
	var speed = 250,
		$scrolltop,
		$top,
		timer;
	slideTop();
	function slideTop(){
		$scrolltop = $(window).scrollTop();
		if($scrolltop>speed){
			$top = $scrolltop - speed;
			timer = requestAnimationFrame(slideTop);
		}else{
			$top = 0;
			cancelAnimationFrame(timer);
		}
		$(window).scrollTop($top);
	}	
});
/* 右侧边栏 end*/

//定时弹出窗口
setTimeout(function(){$('.dialog').show();},5000);
$('.close,.next-time').click(function(){
	$('.dialog').hide();
});
/*************************************** common end ****************************************/
})//ready的结束符

