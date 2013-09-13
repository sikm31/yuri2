// JavaScript Document
$(document).ready(function() {
	$(".box").click(checkForCode);
		 function getRandom(num)
		 {
  			var my_num = Math.floor(Math.random()*num);
  			return my_num;
 		 }
		function  checkForCode () 
		{
		//$(".box p").remove();
        var discount = Math.floor((Math.random()*5)+5);
      	var discount_msg = "<p>Your Discount is "+ discount +"%</p>";
   		alert(discount);
		$(this).append(discount_msg);
		$(".box").each( function(){
   		$(this).unbind("click");
  		});
	
    }//end click function
	function getRandom(num) {
    	var my_num = Math.floor(Math.random()*num);
 	 	return my_num;
 }
});//end doc ready
