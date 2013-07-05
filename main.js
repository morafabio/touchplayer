var playlist = [
	{
		"title": "snow-motion",
		"description": "what a massive and unbelievable winter we're having!",
		"image": "http://d3el35u4qe4frz.cloudfront.net/eawtAP1q-720.jpg",
		"link": "http://www.google.com/",
		"duration": "183"
	},
	{
		"title": "driving rain",
		"description": "",
		"image": "http://d3el35u4qe4frz.cloudfront.net/njZMLMwy-720.jpg",
		"duration": "782"
	},
	{
		"title": "winter brook",
		"description": "",
		"image": "http://d3el35u4qe4frz.cloudfront.net/Vg7cPUdl-720.jpg"
	}
];

$(document).ready(function(){
	
	$('#container').coverflow({
				width: '100%',
				height: '100%',
				item: 1,
				playlist: playlist,
				coverwidth: 280,
				coverheight: 250,
				fixedsize: true,
				textoffset: 50
			});

});