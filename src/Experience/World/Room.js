import * as THREE from 'three'

import Experience from '../Experience'
import ZoomInOnLoad from './animations/ZoomInOnLoad'
import RoomBakes from './RoomBakes'

import SteamCylinder from './SteamCylinder'
export default class Room {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.time = this.experience.time
		this.debug = this.experience.debug

		// Scene
		this.resource_theDojo = this.resources.items.theDojo

		// -> Scene Textures (bakedTextures)
		this.roomBakes = new RoomBakes()

		// -> Shaders
		this.steamCylinder = new SteamCylinder(
			'steamCone',
			'steamCone',
			[-1.68, 0.42, -0.25, 4.5]
		)

		this.steamCylinderLeft = new SteamCylinder(
			'steamCone',
			'steamCone',
			[-1.7, 0.42, -0.15, 4.7]
		)

		// -> Animations
		this.clock = new THREE.Clock()
		this.zoomInOnLoad = new ZoomInOnLoad()

		// Debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('Room Master')
		}

		this.setModel()
		// this.setDebug()
	}

	setModel() {
		// objects & emissions

		this.model_theDojo = this.resource_theDojo.scene
		this.model_theDojo.traverse((c) => {
			c.material = this.roomBakes.bakedMaterial
		})

		// this.modelTest1 = this.modelTest1Resource.scene
		// this.modelTest1.traverse((c) => {
		// 	c.material = this.roomBakes.model1bakeMaterial
		// })
		console.log(this.model_theDojo)

		// tape for animation
		this.tape = this.model_theDojo.children.find(
			(child) => child.name === 'merged_tape'
		)
		console.log(this.tape)

		// pictures on wall of Helio and Kano & symbols on wall scrolls

		for (let i = 0; i < this.model_theDojo.children.length; i++) {
			switch (this.model_theDojo.children[i].name) {
				case 'merged_Helio':
					this.picture_1 = this.model_theDojo.children[i]
					this.picture_1.material = this.roomBakes.bakedHelioMaterial
					break
				case 'merged_Kano':
					this.picture_2 = this.model_theDojo.children[i]
					console.log(this.picture_2, 'pic 2')
					this.picture_2.material = this.roomBakes.bakedKanoMaterial
					break
				case 'merged_right_symbol':
					this.scroll_1 = this.model_theDojo.children[i]
					this.scroll_1.material = this.roomBakes.bakedSymbolsRightMaterial
					break
				case 'merged_bottom_left_symbol':
					this.scroll_2 = this.model_theDojo.children[i]
					this.scroll_2.material = this.roomBakes.bakedSymbolsLeftBottomMaterial
					break
				case 'merged_top_left_symbol':
					this.scroll_2 = this.model_theDojo.children[i]
					this.scroll_2.material = this.roomBakes.bakedSymbolsLeftTopMaterial
					break
				case 'merged_temple_symbol':
					this.templeSymbols = this.model_theDojo.children[i]
					console.log(this.templeSymbols)
					this.templeSymbols.material = this.roomBakes.bakedTempleSymbolsMaterial
					break
				default:
					break
			}
		}
		// this.templeSymbols.position.y = 5
		// this.templeSymbols.scale.set(5, 5, 5)

		//scene elements [call the joined main model "joinedBake"]
		// this.mainRoom = this.model.children.find(()=>child.name === "joinedBake")
		// this.mainRoom.material = this.bakedMaterial

		this.scene.add(this.model_theDojo)
	}

	setDebug() {}

	update() {
		this.elapsed = this.clock.getElapsedTime()
		this.tape.position.y = Math.sin(this.elapsed * 2) * 0.05 + 0.4

		this.steamCylinder.update()
		this.steamCylinderLeft.update()
	}
}
