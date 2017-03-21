$('#app').html(`
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	
	<div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
 
  `);

setTimeout(function(){
x();
},3000);


function x(){
$.ajax({
	url:"https://api.spotify.com/v1/search?q=artist:paramore&type=album"

}).done(function(response){

	$.ajax({
		url:response.albums.items[0].href
	}).done(function(album){


	console.log(response);
	let name =response.albums.items[0].artists[0].name;
	let image1 = response.albums.items[0].images[1].url;
	let image2 = response.albums.items[1].images[1].url;
	let image3 = response.albums.items[2].images[1].url;
	let image4 = response.albums.items[3].images[1].url;
	let image5 = response.albums.items[4].images[1].url;
	let image6 = response.albums.items[5].images[1].url;

	let mp3_1 = album.tracks.items[0].preview_url;
	let mp3_2 = album.tracks.items[1].preview_url;
	let mp3_3 = album.tracks.items[2].preview_url;
	let mp3_4 = album.tracks.items[3].preview_url;
	let mp3_5 = album.tracks.items[4].preview_url;
	let mp3_6 = album.tracks.items[5].preview_url;
	let html = `
		<h1><center>${name}</h1>
		<img src ="${image1}"/>
		<audio controls>
		<source src = "${mp3_1}" type="audio/mpeg">
		Your browsr does not support the audio element.
		</audio>
		
		<img src ="${image2}"/>
		<audio controls>
		<source src = "${mp3_2}" type="audio/mpeg">
		Your browsr does not support the audio element.
		</audio>
	
		<img src ="${image3}"/>
		<audio controls>
		<source src = "${mp3_3}" type="audio/mpeg">
		Your browsr does not support the audio element.
		</audio>
	
		<img src ="${image4}"/>
		<audio controls>
		<source src = "${mp3_4}" type="audio/mpeg">
		Your browsr does not support the audio element.
		</audio>
		
		<img src ="${image5}"/>
		<audio controls>
		<source src = "${mp3_5}" type="audio/mpeg">
		Your browsr does not support the audio element.
		</audio>
	
		<img src ="${image6}"/>
		<audio controls>
		<source src = "${mp3_6}" type="audio/mpeg">
		Your browsr does not support the audio element.
		</audio></center>
`;

$('#app').html(html);
});
});
}