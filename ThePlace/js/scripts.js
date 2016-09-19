$(document).ready(function() {
	
 $("#contact").click(function() {
        $("#contact-window").toggle();
        $("#overlay").toggle();
    });


 $('#close').click(function() {
 	$("#contact-window").toggle();
 	$("#overlay").toggle();
 });

});