$(function(){
	/*
		回到顶部（用面向对象写）
		1、给body的一个2000px的高度
		2、右下角有一个【回到顶部】的按钮（div盒子模拟）
		3、当滚动条高度>500时，按钮慢慢显示出来（fadeIn）
		4、点击【回到顶部】时，慢慢回到顶部（定时器实现）
		5、到达顶部时，按钮慢慢消失（fadeOut）
	*/

	// 事件： scroll
	//CSS方法： scrollTop
	//动画效果： fadeIn fadeOut
	//回到顶部的运动  setInterval 使用animate无效
	
	var scrollTop = {
		backTop: $('.back-top'),
		top: 0,
		timer: null,
		init: function(){
			this.scroll();
			this.backTopClick();
		},
		scroll: function(){
			//window.onscroll
			var _this = this;
			$(window).scroll(function(){
				//document.body.scrollTop || document.documentElement.scrollTop
				_this.top = $(document).scrollTop();
				if(_this.top > 500){
					_this.backTop.fadeIn(500);
				}
				if(_this.top < 500){
					_this.backTop.fadeOut(500);
				}
			});
		},
		backTopClick: function(){
			var _this = this;
			this.backTop.click(function(){
				_this.top = $(document).scrollTop();
				clearInterval(_this.timer);
				_this.timer = setInterval(function(){
					_this.top -= 15;
					$(document).scrollTop(_this.top);
					if(_this.top <= 0){
						clearInterval(_this.timer);
						_this.backTop.fadeOut(500);
					}
				},13);
			});
		}
	};
	scrollTop.init();
	
});