$(document).ready(function(){	
//	$( "#fizzbuzz_form" ).submit(function(event) {
//	});
	
	$("#btn_submit").click(function(){
	//	$("#fizzbuzz_form").submit();
		var fz_num = $("input[name=number]").val();
		var i=0;

		$("#output_div").html("");
		
		for (i = 1; i <= fz_num; i++) {

			if(i%3 === 0) { $("#output_div").append("Fizz"); }
			if(i%5 === 0) { $("#output_div").append("Buzz"); }
			else if(i%3 !== 0) { $("#output_div").append(i); }

			$("#output_div").append("<br>");

		}
	});
});