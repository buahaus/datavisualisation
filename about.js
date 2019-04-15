$(function(){
	var key = 'SCJnOBwjJqgpwxIybOHvs0cUt0XRrydH';	// Your unique key - https://www.behance.net/dev
	var behanceUser = 'hello6e2d'; 
	var urlUser = 'https://api.behance.net/v2/users/' + behanceUser + '?client_id=' + key;

	$.ajax({
		url: urlUser,
		dataType: 'jsonp',
		success: function(res) {
			console.log(res);
			var user = res.user;
			$('<h1 class="font">Information About ' + user.first_name + ' ' + user.last_name + '</h1>').prependTo('.about-container');
			$('<img class="user-image" src="'+ user.images[276] +'">').appendTo('.about-container');
			$('<div class="stats-area">Appreciations: ' + user.stats.appreciations + '</div>').appendTo('.about-container');
			$('<div class="stats-area">Views: ' + user.stats.views + '</div>').appendTo('.about-container');
			$('<div class="stats-area">Followers: ' + user.stats.followers + '</div>').appendTo('.about-container');
			$('<div class="stats-area">Following: ' + user.stats.following + '</div>').appendTo('.about-container');
		}
	}); // END ajax request
});