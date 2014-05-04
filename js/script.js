jQuery(document).ready(function($) {
			
		function arabidesign_navigata (size) {
			/*sticky navigation*/

			/*defin Variables*/
            var nav = $('.navigation_nav');
            var banner = $('header img');
            var pos = nav.position();

            /*even handler || listen to event */
            $(window).scroll(function() {
            	/* set var to compare with */
            	var windowpos = $(window).scrollTop();

            	if 	 (windowpos >= banner.outerHeight()){nav.addClass('fixedTop'); }/*end if statement*/
            	else {nav.removeClass('fixedTop'); }/*end else statement*/
            });
        	
        	/*hide Subnav*/
  		   
           	/*Show Subnav on hover*/
  
      			if ($(window).width() > size) { /*if the window size is > 750 then do show subnavigation*/
					
					$ ('nav ul li').hover(function(){  
							$(this).children('ul').show().stop();  
						}, function (){ 
							$ (this).children('ul').hide();  
						}
					);

           		};/*end if statement*/

	           	/*SlideDown/Up subnavigation on small screen*/
	           	/*toggle class min plus to change icon*/	
           		if ($(window).width() < size){
           		    	
           		    	/*add plus class to show + on each li has ul */
           				$('nav ul li').has('ul').addClass('plus');

           		    	$ ('nav ul li').click(function() {

           		    		/*solve go to top issue when i click*/
           		    		$(this).has('ul').children('a').attr("href", "javascript:void(0)");
           		    		/*toggle: show hide sub nav when i click*/
           					$(this).children('ul').slideToggle();
							/*toggle: + or - icon*/
           					$(this).has('ul').toggleClass('plus minus');

           				});

           		};/*end if statement*/



			}
			           		/*Refreche Ellements to view css*/
           		/*delet this from the final project */
                $(window).bind('resize', function() {
				  	 location.reload();
				});	
				
			arabidesign_navigata (750) ;
				

		});
