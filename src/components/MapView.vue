	<template>
		<div class="max">
			<div class="div-carte">
			<l-map
				:zoom="zoom"
				:min-zoom="minZoom"
				:max-zoom="maxZoom"
				:crs="crs"
				:max-bounds="maxbounds"
				class="map"
				ref="map"
				@update:zoom="zoomUpdated"
				@update:center="centerUpdated"
				style="height: 540px; width: 910px;"
			>
				<l-image-overlay
				:url="url"
				:bounds="bounds"

				>
				
				</l-image-overlay>
				</l-map>
			</div>
			<router-view/>		
	</div>
	</template>
	
	<script>
	import { LMap, LImageOverlay} from 'vue2-leaflet';
	import L from "leaflet";
	import 'leaflet/dist/leaflet.css';
	
	export default {
	components: {
		LMap,
		LImageOverlay,
	},
	data () {
		return this.map = {
		url: 'https://cdn.discordapp.com/attachments/540088970059448341/1050395342933344366/map.png',
		minZoom: -1,
		maxZoom: 1,
		zoom: -1,
		crs: L.CRS.Simple,
		bounds: [[-540, -910], [540, 910]],
		maxbounds: [[-540, -910], [540, 910]],
		markers: [
			L.latLng(47.412, -1.218),
			L.latLng(47.413220, 200),
			L.latLng(47.414, -200),
		]
		/*places: [
			{ name: "Sol", lat: 0.0, lng: 0.0 },
			{ name: "Sol1", lat: -200.0, lng: -200.0 },
			{ name: "Sol2", lat: 200.0, lng: 200.0 },
		],*/	
		//markerLatLng: this.map.layerPointToLatLng(this.map.containerPointToLayerPoint(200,200))
		}
	},
	mounted() {
		this.addMarker(); 
		this.$refs.map.mapObject.setView([-540, 910], -1);
	},
	methods: {
		onClick(){
			console.log("LESGO")
		},
		addMarker () {
			L.marker(L.latLng(45.0, 45.0)).addTo(this.$refs.map.mapObject).on('click', function(e) {
				console.log(e);
			});
			/*console.log(typeof(this.$ref.map.mapObject))
			var markerData = [[0,0],[185,362],[277,593],[307,354],[472,472],[473,568],[550,516],[535,370],[230,119]];
*/
			for (var i=0; i<this.markers.length; i++){
				L.marker(this.markers[i]).addTo(this.$refs.map.mapObject).on('click', function(e) {
					console.log(e)
					this.$routes.push("/map/1")
				});
			}
		},
		zoomUpdated (zoom) {
			this.zoom = zoom;
			console.log(this.markers)
		},
		centerUpdated (center) {
		this.center = center;
		}
	}
	}
	</script>
	
	<style>
	.max {
		height: 560px;
		width: 100px;
		display: flex;
		margin: 20px 10%;
	}
	.leaflet-control-attribution {
	display: none;
  }
	</style>