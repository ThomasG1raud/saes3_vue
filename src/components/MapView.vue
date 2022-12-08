	<template>
	<l-map
		:zoom="zoom"
		:max-bounds="maxbounds"
		class="map"
		ref="map"
		@update:zoom="zoomUpdated"
		@update:center="centerUpdated"
		style="height: 540px; width: 910px;"
	>
		<l-image-overlay
		:url="url"
		>
		</l-image-overlay>
		</l-map>
	</template>
	
	<script>
	import { LMap, LImageOverlay } from 'vue2-leaflet';
	import 'leaflet/dist/leaflet.css';
	
	export default {
	components: {
		LMap,
		LImageOverlay,
	},
	data () {
		return {
		url: 'https://cdn.discordapp.com/attachments/540088970059448341/1050070287493902398/carte.png',
		zoom: 0	,
		maxbounds:[
			[0,0], 
		[0,1080], 
		[0,1920],
		[1080,1920]]
		}
	},
	methods: {
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
	.map {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow :hidden
	}
	</style>