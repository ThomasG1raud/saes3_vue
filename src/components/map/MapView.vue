	<template>
		<div class="max">
			<div class="div-carte">
			<l-map
				:zoom="zoomRatio"
				:min-zoom="minZoom"
				:max-zoom="maxZoom"
				:crs="crs"
				:max-bounds="maxbounds"
				class="map"
				ref="map"
				@update:zoom="zoomUpdated"
				@update:center="centerUpdated"
				:style="{'width': width+'px', 'height': height+'px'}"
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
	import router from '@/router';
	
	export default {
	components: {
		LMap,
		LImageOverlay,
	},
	props: {
		height: Number,
		width: Number,
		zoomRatio: Number,
		urlPresta: String
	},
	data () {
		return this.map = {
		url: 'https://cdn.discordapp.com/attachments/540088970059448341/1052712793138266132/map.png',
		minZoom: -1,
		maxZoom: 1,
		crs: L.CRS.Simple,
		bounds: [[-540, -910], [540, 910]],
		maxbounds: [[-540, -910], [540, 910]],
		markers: [
			L.latLng(-210, 490),
			L.latLng(50, 462),
			L.latLng(-23, 255),
			L.latLng(145, 200),
			L.latLng(132, -55),
			L.latLng(-40, -5),
			L.latLng(-210, 150),
			L.latLng(-210, -120),
			L.latLng(115, -440),
			L.latLng(-175, -525),
		]
		}
	},
	mounted() {
		this.addMarker(); 
		this.$refs.map.mapObject.setView([-540, 910], this.zoomRatio);
	},
	methods: {
		onClick(){
			console.log("LESGO")
		},
		addMarker () {
			/*L.marker(L.latLng(45.0, 45.0)).addTo(this.$refs.map.mapObject).on('click', function(e) {
				console.log(e);
			});*/
			/*console.log(typeof(this.$ref.map.mapObject))
			var markerData = [[0,0],[185,362],[277,593],[307,354],[472,472],[473,568],[550,516],[535,370],[230,119]];
*/
			for (var i=0; i<this.markers.length; i++){
				L.marker(this.markers[i]).addTo(this.$refs.map.mapObject).on('click', function(e) {
					console.log(e)
					//console.log(router);
					router.push("/map/1")
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
	.leaflet-control-attribution {
	display: none;
  }

  .div-carte {
    display: flex;
    align-items: center;
    margin:10px;
  }
  .max {
    display: flex;
    height: 100%;
  }
	</style>