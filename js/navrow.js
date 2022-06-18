/*************************
	 ON WINDOW SCROLL FUNCTION
	*************************/
	var sectionIds = {};		

	$(".row-nav").each(function(){	
		var $this = $(this);			
		sectionIds[$this.attr("id")] = $this.first().offset().top -120;	
	});			
	
	
	var count2 = 0;
	$(window).scroll(function(event){		

		var scrolled = $(this).scrollTop();		
	
		//Check if we've reached the top
	    if (scrolled > count2){  count2++;  } 
		else { count2--; }
	    
		count2 = scrolled;		
		
		if(count2 == 0){
			$('h1 ,h2').addClass('animationActive');
		}else{
			$('h1 ,h2').removeClass('animationActive');
		}
	
	});
	
	/**************
	 IN-NAVIGATION
	**************/
	$(".nav-btn").click(function(){		
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		
		var i = $(this).index();

		switch (i) {
			case 0:
				$('#nav-indicator').css('left', '-31px');	
				break;
			case 1:
				$('#nav-indicator').css('left', '93px');	
				break;	
			case 2:
				$('#nav-indicator').css('left', '220px');	
				break;
			case 3:
				$('#nav-indicator').css('left', '346px');	
				break;
		}

		
		var name = $(this).attr("data-row-id");
		var id = "#" + name;
		var top = $(id).first().offset().top -60;			
		$('html, body').animate({scrollTop: top+'px'}, 300);
		
	});
	
	
	
