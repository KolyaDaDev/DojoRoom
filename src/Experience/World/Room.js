import * as THREE from 'three'
import Experience from '../Experience'

export default class Room {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.time = this.experience.time
		this.debug = this.experience.debug

		// Scene
		this.resource_objects = this.resources.items.objects
		console.log(this.resource_objects)

		// -> Scene Texture (bakedTexture)
		this.objectsBakedTexture = this.resources.items.objectsBakedTexture
		console.log(this.objectsBakedTexture)
		this.objectsBakedTexture.flipY = false
		this.objectsBakedTexture.encoding = THREE.sRGBEncoding
		this.bakedMaterial = new THREE.MeshBasicMaterial({
			map: this.objectsBakedTexture,
		})
		// -> Shaders

		// Debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('Room Master')
		}

		this.setModel()
		// this.setDebug()
	}

	setModel() {
		this.model_objects = this.resource_objects.scene
		console.log(this.model_objects)

		this.model_objects.traverse((child) => {
			child.material = this.objectsBakedTexture
		})

		// this.mug = this.model.children.find((child) => child.name === 'Mug')
		// console.log(this.mug)

		//scene elements [call the joined main model "joinedBake"]
		// this.mainRoom = this.model.children.find(()=>child.name === "joinedBake")
		// this.mainRoom.material = this.bakedMaterial

		this.scene.add(this.model_objects)
	}

	setDebug() {}

	update() {}
}
