(function ($) {
$(document).ready(function() {
	
	$(".front #page-title").addClass("element-invisible");	
	$("#zone-branding-wrapper").addClass("ontop");
	$("#block-superfish-1").addClass("ontop");	
 
 });
 
$(document).on( 'scroll', function(){
        if ($(window).scrollTop() > 100) {
            //$('#zone-top-wrapper').css({position: "fixed", top: "0px", width: "100%", zIndex: "400"});
            $("#zone-branding-wrapper").removeClass("ontop");
            //$("#block-superfish-1").removeClass("ontop");	
           
            
           
            
        } else {
            //$('#zone-top-wrapper').css({position: "relative", top: "0px"});
           
             $("#zone-branding-wrapper").addClass("ontop");	
            // $("#block-superfish-1").addClass("ontop");
             
        }
        
        if ($(window).scrollTop() > 100) {
            $("#block-superfish-1").removeClass("ontop");	
           
            
           
            
        } else {
             $("#block-superfish-1").addClass("ontop");
             
        }
        
         

        
        
    });
 
  
 
 
})(jQuery);