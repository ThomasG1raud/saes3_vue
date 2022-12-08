	<template>
		<div class="max">
			<div class="div-carte">
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
			</div>
			<router-view/>		
	</div>
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
	.max {
		height: 560px;
		width: 100px;
		display: flex;
		margin: 20px 10%;
	}
	</style>