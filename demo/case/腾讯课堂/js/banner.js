	$(function(){
		var index = 0;
		var playTime = 5000;
		var timer = null;
		var totalCount = $("#bannerbox").find("li").length;
	
		//��һҳ����
		$(".next").on("click",function(){
			if(timer)clearInterval(timer);
			index++;
			if(index >= totalCount)index=0;
			banner_main(index);
		}).mouseout(function(){
			auto_play_banner();
		});

		//��һҳ����
		$(".pre").on("click",function(){
			if(timer)clearInterval(timer);
			index--;
			if(index < 0)index = totalCount-1;
			banner_main(index);
		}).mouseout(function(){
			auto_play_banner();
		});

		//��չͼ�л�
		$("#toolbar").find("li").mouseover(function(){
			if(timer)clearInterval(timer);
			index = $(this).index();
			banner_main(index);			
		}).mouseout(function(){
			auto_play_banner();
		});
		
		//��ʼ���Զ��ֲ�
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
		
		//�ܿ��Ʒ���
		function banner_main(index){
			var $liObj = $("#bannerbox").find("li").eq(index);
			var $toolbar = $("#toolbar").find("li").eq(index);
			$liObj.fadeIn("slow").siblings().hide();			
			$toolbar.addClass("on").siblings().removeClass("on");//��ť����
			//��������			
			var $background = $toolbar.data("color");
			$(".b_bg").css("background",$background);
		}		
	});