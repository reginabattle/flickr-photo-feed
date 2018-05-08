
// Check if photo list is empty
if($('#photos').text().length === 0) {
	$('#photos').html('<h2 class="select-text">Select an option above.</h2>');
}

$('button').click(function(e){
	e.preventDefault();

	// Filter buttons
	$('button').removeClass('selected');
	$(this).addClass('selected');
	
	// Filckr API
	const flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	
	// Options
	let animal = $(this).text();
	let flickrOptions = {
		tags: animal,
		format: "json"
	}

	// Create photo list
	function displayPhotos(data) {
		let photoList = '<ul class="photo-list">';
		$.each(data.items, function(i, photo){
			photoList += `<li><a href="${photo.link}" style="background-image:url(${photo.media.m})"></a>`
		});
		photoList += '</ul>'
		$('#photos').html(photoList);
	}
	
	$.getJSON(flickrAPI, flickrOptions, displayPhotos);
});