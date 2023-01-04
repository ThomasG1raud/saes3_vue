	<template>
		<div class="max">
			<div class="div-carte">
			<l-map
				:zoom="zoomRatio"
				:min-zoom="map.minZoom"
				:max-zoom="map.maxZoom"
				:crs="map.crs"
				:max-bounds="map.maxbounds"
				class="map"
				ref="map"
				@update:zoom="zoomUpdated"
				@update:center="centerUpdated"
				:style="{'width': getWidth+'px', 'height': getHeight+'px'}"
			>
				<l-image-overlay
				:url="require('@/assets/carte.png')"
				:bounds="map.bounds"

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
  import {mapGetters} from "vuex";

	export default {
	components: {
		LMap,
		LImageOverlay,
	},
	props: {
		height: Number,
		width: Number,
		zoomRatio: Number,
    baseUrl: String,
    zoomBound: Number
	},
	data: () => ({
    map: {
      url: 'carte.png',
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
	}),
	mounted() {
    if (this.zoomBound) {
      const height = this.height * this.zoomBound;
      const width = this.width * this.zoomBound;
      this.map.bounds = [[-height, -width], [height, width]];
      this.map.markers = [
        L.latLng(-210 * this.zoomBound, 490 * this.zoomBound),
        L.latLng(50 * this.zoomBound, 462 * this.zoomBound),
        L.latLng(-23 * this.zoomBound, 255 * this.zoomBound),
        L.latLng(145 * this.zoomBound, 200 * this.zoomBound),
        L.latLng(132 * this.zoomBound, -55 * this.zoomBound),
        L.latLng(-40 * this.zoomBound, -5 * this.zoomBound),
        L.latLng(-210 * this.zoomBound, 150 * this.zoomBound),
        L.latLng(-210 * this.zoomBound, -120 * this.zoomBound),
        L.latLng(115 * this.zoomBound, -440 * this.zoomBound),
        L.latLng(-175 * this.zoomBound, -525 * this.zoomBound),
      ]
    }

		this.addMarker(this.baseUrl, this.curentPrestataire, this.sendValueToParent, this.getAllStandAssigned, this.getOption);
		this.$refs.map.mapObject.setView([-540, 910], this.map.zoomRatio);
	},
  computed: {
    ...mapGetters(["getInfoPrestataireByIdStand", "getAllStandAssigned"]),
    getHeight() {
      let height = this.height;
      if (this.zoomBound) {
        height *= this.zoomBound
      }
      return height
    },
    getWidth() {
      let width = this.width;
      if (this.zoomBound) {
        width *= this.zoomBound
      }
      return width
    }
  },
	methods: {
    curentPrestataire(idStand) {
      return this.getInfoPrestataireByIdStand(idStand);
    },
    sendValueToParent(idStand) {
      this.$emit('value-changed', idStand);
    },
    getOption(idStand, allStandAssigned) {
      return {
        opacity: allStandAssigned.includes(idStand) ? 0.5 : 1
      }
    },
		addMarker (baseUrl, curentPrestataire, sendValueToParent, allStandAssigned, getOption) {
      L.marker(this.map.markers[0]).addTo(this.$refs.map.mapObject).on('click', function() {
        console.log("Billeterie")
      });
			for (let i=1; i<this.map.markers.length; i++){
				L.marker(this.map.markers[i], getOption(i, allStandAssigned)).addTo(this.$refs.map.mapObject).on('click', function() {
          const prestataire = curentPrestataire(i);
          if (baseUrl === "/admin/assigned") {
            sendValueToParent(i);
          } else if (prestataire && prestataire.idStand) {
            const path = `${baseUrl}/map/${i}`;
            if (router.currentRoute.path !== path) {
              router.push(path);
            }
          } else {
            const path = `${baseUrl}/map/0`;
            if (router.currentRoute.path !== path) {
              router.push(path);
            }
          }
				});
			}
		},
		zoomUpdated (zoom) {
			this.map.zoom = zoom;
		},
		centerUpdated (center) {
		this.map.center = center;
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