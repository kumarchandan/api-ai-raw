//
this.baseUrl = "https://api.api.ai/v1/";

$(document).ready(function() {

	$('.btn').click(function(){
        var textarea_message = $('.new-message').val();
        console.log(textarea_message)
        $('.new-message').val('');
      });
})


//
function send(input_data) {
	var text = input_data

	$.ajax({
		type: 'POST',
		url: this.baseUrl + "query?v=20150910",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		headers: {
					"Authorization": "Bearer " + accessToken
				},
		data: JSON.stringify({ query: text, lang: "en", sessionId: "somerandomthing" }),
	})
}