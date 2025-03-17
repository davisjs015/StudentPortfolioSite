//Tooltip jQuery
$(document).tooltip();


//Hero Animation
//Example from http://jsfiddle.net/bHEVr/
//Author Fitorec
$(document).ready(function(){
    brand = ['#ff66cc', '#87d8d5', '#1a237e']
    var i = 0;
	    animate_loop = function() {
	            $('.hero1').animate({color:brand[(i++)%brand.length]
	            }, 1350, function(){
	                        animate_loop();
	            });
	    }
	    animate_loop();
	});


