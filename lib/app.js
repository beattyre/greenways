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
			map.setView(new L.LatLng(32.8211, -79.9705), 11);
			map.addLayer(osm);
		};
	
	initmap();
