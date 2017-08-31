$(function(){
	// 设置顶部轮播图
	var swiper=new Swiper('.swiper-container',{
		pagination:".swiper-pagination",
		loop:true,
		autoplay:2000,
		autoplayDisableOnInteraction:false,//点击停止设置为关闭
	});
	var status=0;
	// 设置地区按钮的点击事件。菜单显示，箭头朝下。反之菜单隐藏，箭头朝下
	$('#click').click(function(){
		if(status==0){
			$('#checkplace').css('animation','show 0.5s linear forwards');
			$('#checkicon').css('transform','rotate(180deg)');
			status=1;
		}else{
			$('#checkicon').css('transform','rotate(0deg)');
			$('#checkplace').css('animation','hide 0.5s linear forwards');
			status=0;
		}

	});
	// 设置选中地区事件。箭头朝上，当前内容置顶，下拉菜单收回，statue设置为0
	$('#checkplace li').click(function() {
		$('#checkicon').css('transform','rotate(0deg)');
		$('#nanjing').html($(this).html());
		$('#checkplace').css('animation','hide 0.5s linear forwards');
		status=0;
	});
	// 设置倒计时，默认值00:02:08
	var hour=0;
	var minute=2;
	var second=8;
	function fn(){
		// 每次时间减1秒
		if(second>0){
			second--;
			// console.log(second);
		}else{
			second=59;
			if(minute>0){
				minute--;
			}else{
				minute=59;
				if(hour>0){
					hour--;
				}
			}
		}
		// 将时间显示到页面
		$('#time').html(' '+toTwo(hour)+':'+toTwo(minute)+':'+toTwo(second));
		// console.log(toTwo(hour)+':'+toTwo(minute)+':'+toTwo(second));
		// 当时间为0，清除定时器，显示活动开始
		if(hour==0&&minute==0&&second==0){
			clearInterval(timer);
			$('#time').html(' '+'活动开始！');
		}
	}
	function toTwo(n){
		return n<10?"0"+n:n;
	}
	// 调动定时器
	var timer=setInterval(fn,1000);





	// 设置查看全部团购事件
	var status1=0
	$('#allbuy').click(function(){

		if(status1==0){
			$('.content4 .line_6:nth-of-type(5)').slideDown(500);
			$('.content4 .line_6:nth-of-type(5)').css('display','flex');
			$('.content4 hr:nth-of-type(5)').slideDown(500);
			$('.content4 hr:nth-of-type(5)').css('display','flex');
			$('.content4 .line_6:nth-of-type(6)').slideDown(500);
			$('.content4 .line_6:nth-of-type(6)').css('display','flex');
			$('.content4 hr:nth-of-type(6)').slideDown(500);
			$('.content4 hr:nth-of-type(6)').css('display','flex');
			$('#allbuy').html('点击收起');	
			status1=1;
		}else{
			$('.content4 .line_6:nth-of-type(5)').slideUp(500);
			$('.content4 hr:nth-of-type(5)').slideUp(500);
			$('.content4 .line_6:nth-of-type(6)').slideUp(500);
			$('.content4 hr:nth-of-type(6)').slideUp(500)
			$('#allbuy').html('查看全部团购');	
			status1=0;
		}

	});




})