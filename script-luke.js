// var key = 'SCJnOBwjJqgpwxIybOHvs0cUt0XRrydH';	// Your unique key - https://www.behance.net/dev
var key = '9AwInosQykaf21iKK6bM2H24oL5BJ1Wa';


var behanceUser = 'hello6e2d'; 				// example - Manuel from Yoobee Creative Catchup #3 | ellastoner370c

var urlProjects = 'https://api.behance.net/v2/users/' + behanceUser + '/projects?client_id=' + key;


$(function(){
	$.ajax({

			url: urlProjects,
			dataType: 'jsonp',

			// when the ajax request is complete do all of these things
			success: function(res) {

				console.log(res);
				var projects = res.projects;


				// https://www.behance.net/dev/api/endpoints/1
				projects.forEach(function(project) {
					$('<div class="content-background"><div class="main-content"><img src ="'+ project.covers.original +'" alt="logo" class="content-item" id="content-image"><p class="content-desc">'+ project.name + '</p></div></div>').appendTo('.main-container');
				});
			},

			// if the ajax request fails do these things as a fallback
			error: function(res) {
				$('<h1> Error!! </h1>').appendTo('body');
			}

		}); // END ajax request
});