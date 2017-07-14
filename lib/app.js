// Load map variable and set extent
		var map;
		function initmap() {
			map = new L.map('map');
			var osmTile = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
			var osmAttributes = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
			var osm = L.tileLayer(osmTile, {
				minZoom: 8,
				maxZoom: 20,
				attribution: osmAttributes,
			});
			map.setView(new L.LatLng(37.2743, -79.9575), 12);
			map.addLayer(osm);
		};
	
	initmap();
