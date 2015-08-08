$(document).ready(function () {

// First Page //
  $(".logo" ).show();
  $(".introduction" ).show();
  $(".first" ).show("clip", 2000);


	


  $("input[name='submit']").on("click", function(e) {
	  	e.preventDefault();	
		var interest = $("input[name='interest']").val();
		$(".results").show("fade", 800);
		$(".introduction, .first").hide("slide");
		$(".restart").show(4000);
		getUsers(interest);
			  });


//  Restart //

  $("input[id='restart']").on("click",function(){ 
   
    location.reload();
  });



//  Results Page //



var getUsers = function(interest) {

	$.ajax({
		url: "https://www.behance.net/v2/users?client_id=4FS7opDXhqN1TAKf63h6hvDiLBgFRT8f&q=" + interest,
		jsonp: "callback",
		dataType: "jsonp",

		success: function(data) {
				
				myData = data.users;
				$.each(myData, function(index, value) {
						$(".user").append("<a href='" + value.url + "' target='_blank' class='hover'>" + "<img src='" + value.images[115] + "'>" + "</a>"+

							"<h3>" + "<a href='" + value.url + "' target='_blank'>" + value.display_name + "</h3>" + 
							"</a>" + 
							"<b>Location: </b>" + value.location + "<br>" + 
							"<b>Field(s): </b>" + value.fields + "<hr>");
						
				});

		}

		});

};


 
});



