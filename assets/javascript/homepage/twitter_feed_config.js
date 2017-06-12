$( document ).ready(function() {
	
		// Get the 5 latest tweets from user: thardesign
		var username = "popraffy";
		var tweets = "5";
		
		$.get('https://api.twitter.com/1.1/statuses/user_timeline.json?popraffy=twitterapi&count=2', function (jsondata) {
			// Parse JSON
			//var data = $.parseJSON(jsondata);
			console.log($.parseJSON(jsondata));
			var i = 0;
			
			// Append to content
			$.each(data, function() {
				i++;
				$('#tweets-timeline').append('<tr><td>' + i + '</td><td>' + this['username'] + '</td><td>' + this['type'] + '</td><td><img src="' + this['avatar'] + '" /></td><td>' + this['date'] + '</td><td>' + this['tweet'] + '</td><tr>');
			});
			
		});
	});