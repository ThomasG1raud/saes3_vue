	<template>
	<l-map
		:zoom="zoom"
		:min-zoom="minZoom"
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
	</template>
	
	<script>
	import { LMap, LImageOverlay } from 'vue2-leaflet';
	import { CRS } from "leaflet";
	import 'leaflet/dist/leaflet.css';
	
	export default {
	components: {
		LMap,
		LImageOverlay,
	},
	data () {
		return {
		url: 'https://cdn.discordapp.com/attachments/540088970059448341/1050395342933344366/map.png',
		minZoom: -1,
		zoom: -1,
		crs: CRS.Simple,
		bounds: [[-540, -910], [540, 910]],
		maxbounds: [[-540, -910], [540, 910]],
			
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