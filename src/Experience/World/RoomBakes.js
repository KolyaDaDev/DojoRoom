import * as THREE from 'three'
import Experience from '../Experience'
import Vertex from '../World/shaders/images/vertex.glsl'
import Fragment from '../World/shaders/images/fragment.glsl'

export default class RoomBakes {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.testTexture = this.resources.items.testTexture

		// -> Main
		this.bakedTexture = this.resources.items.bakedTexture
		this.bakedTexture.flipY = false
		this.bakedTexture.encoding = THREE.sRGBEncoding
		this.bakedMaterial = new THREE.MeshBasicMaterial({
			map: this.bakedTexture,
		})

		// // -> Room Helio Pic
		this.bakedHelioTexture = this.resources.items.bakedHelio
		this.bakedHelioTexture.flipY = false
		this.bakedHelioTexture.encoding = THREE.sRGBEncoding
		this.bakedHelioMaterial = new THREE.MeshBasicMaterial({
			map: this.bakedHelioTexture,
		})
		// console.log(this.bakedHelioMaterial)

		// // -> Room Kano Pic
		this.bakedKanoTexture = this.resources.items.bakedKano
		this.bakedKanoTexture.flipY = false
		this.bakedKanoTexture.encoding = THREE.sRGBEncoding

		this.bakedKanoMaterial = new THREE.MeshBasicMaterial({
			// color: 'blue',
			map: this.bakedKanoTexture,
			// // map: this.testTexture,
			// vertexShader: Vertex,
			// fragmentShader: Fragment,
			// uniforms: {
			// 	uTexture: { value: this.testTexture },
			// },
		})

		// // -> Room Symbols Right
		this.bakedSymbolsRightTexture = this.resources.items.bakedSymbolsRight
		this.bakedSymbolsRightTexture.flipY = false
		this.bakedSymbolsRightTexture.encoding = THREE.sRGBEncoding
		this.bakedSymbolsRightMaterial = new THREE.MeshBasicMaterial({
			map: this.bakedSymbolsRightTexture,
		})

		// // -> Room Symbols Left top
		this.bakedSymbolsLeftTopTexture = this.resources.items.bakedSymbolsLeftTop
		this.bakedSymbolsLeftTopTexture.flipY = false
		this.bakedSymbolsLeftTopTexture.encoding = THREE.sRGBEncoding
		this.bakedSymbolsLeftTopMaterial = new THREE.MeshBasicMaterial({
			map: this.bakedSymbolsLeftTopTexture,
		})
		// // -> Room Symbols Left bottom
		this.bakedSymbolsLeftBottomTexture =
			this.resources.items.bakedSymbolsLeftBottom
		this.bakedSymbolsLeftBottomTexture.flipY = false
		this.bakedSymbolsLeftBottomTexture.encoding = THREE.sRGBEncoding
		this.bakedSymbolsLeftBottomMaterial = new THREE.MeshBasicMaterial({
			map: this.bakedSymbolsLeftBottomTexture,
		})

		// // -> Room Temple Symbols
		this.bakedTempleSymbolsTexture = this.resources.items.bakedTempleSymbols
		this.bakedTempleSymbolsTexture.flipY = false
		this.bakedTempleSymbolsTexture.encoding = THREE.sRGBEncoding

		this.bakedTempleSymbolsMaterial = new THREE.MeshBasicMaterial({
			map: this.bakedTempleSymbolsTexture,
			// color: 'red',
		})
	}
}
