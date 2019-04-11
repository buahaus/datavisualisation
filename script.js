var header = document.getElementById("flex-container-designers");
var btns = header.getElementsByClassName("designer-name");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// Get the modal
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('content-image');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// // span.onclick = function() { 
// //   modal.style.display = "none";
// // }

var key = 'SCJnOBwjJqgpwxIybOHvs0cUt0XRrydH';	// Your unique key - https://www.behance.net/dev
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