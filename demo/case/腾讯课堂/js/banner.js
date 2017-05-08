	$(function(){
		var index = 0;
		var playTime = 5000;
		var timer = null;
		var totalCount = $("#bannerbox").find("li").length;
	
		//下一页功能
		$(".next").on("click",function(){
			if(timer)clearInterval(timer);
			index++;
			if(index >= totalCount)index=0;
			banner_main(index);
		}).mouseout(function(){
			auto_play_banner();
		});

		//上一页功能
		$(".pre").on("click",function(){
			if(timer)clearInterval(timer);
			index--;
			if(index < 0)index = totalCount-1;
			banner_main(index);
		}).mouseout(function(){
			auto_play_banner();
		});

		//轮展图切换
		$("#toolbar").find("li").mouseover(function(){
			if(timer)clearInterval(timer);
			index = $(this).index();
			banner_main(index);			
		}).mouseout(function(){
			auto_play_banner();
		});
		
		//初始化自动轮播
		auto_play_banner();
		function auto_play_banner(){
			timer = setInterval(function(){
				if(index >= totalCount-1){
					index=0;
				}else{
					index++;
				}
				banner_main(index);
			},playTime);
		}
		
		//总控制方法
		function banner_main(index){
			var $liObj = $("#bannerbox").find("li").eq(index);
			var $toolbar = $("#toolbar").find("li").eq(index);
			$liObj.fadeIn("slow").siblings().hide();			
			$toolbar.addClass("on").siblings().removeClass("on");//按钮联动
			//背景联动			
			var $background = $toolbar.data("color");
			$(".b_bg").css("background",$background);
		}		
	});