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
		this.resource_floor = this.resources.items.floor
		this.resource_walls = this.resources.items.walls

		// -> Scene Textures (bakedTextures)
		this.objectsBakedTexture = this.resources.items.objectsBakedTexture
		this.objectsBakedTexture.flipY = false
		this.objectsBakedTexture.encoding = THREE.sRGBEncoding
		this.objectsBakedMaterial = new THREE.MeshBasicMaterial({
			map: this.objectsBakedTexture,
		})
		this.floorBakedTexture = this.resources.items.floorBakedTexture
		this.floorBakedTexture.flipY = false
		this.floorBakedTexture.encoding = THREE.sRGBEncoding
		this.floorBakedMaterial = new THREE.MeshBasicMaterial({
			map: this.floorBakedTexture,
		})
		this.wallsBakedTexture = this.resources.items.wallsBakedTexture
		this.wallsBakedTexture.flipY = false
		this.wallsBakedTexture.encoding = THREE.sRGBEncoding
		this.wallsBakedMaterial = new THREE.MeshBasicMaterial({
			map: this.wallsBakedTexture,
		})

		// -> Shaders

		// -> Animations
		this.clock = new THREE.Clock()

		// Debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('Room Master')
		}

		this.setModel()
		// this.setDebug()
	}

	setModel() {
		// objects
		this.model_objects = this.resource_objects.scene
		this.model_objects.traverse((child) => {
			child.material = this.objectsBakedMaterial
		})

		// floor
		this.model_floor = this.resource_floor.scene
		this.model_floor.traverse((child) => {
			child.material = this.floorBakedMaterial
		})
		// walls
		this.model_walls = this.resource_walls.scene
		this.model_walls.traverse((child) => {
			child.material = this.wallsBakedMaterial
		})

		this.tape = this.model_objects.children.find((child) => child.name === 'tape')
		console.log(this.tape)

		//scene elements [call the joined main model "joinedBake"]
		// this.mainRoom = this.model.children.find(()=>child.name === "joinedBake")
		// this.mainRoom.material = this.bakedMaterial

		this.scene.add(this.model_objects, this.model_floor, this.model_walls)
	}

	setDebug() {}

	update() {
		this.elapsed = this.clock.getElapsedTime()
		this.tape.position.y = Math.sin(this.elapsed * 2) * 0.05 + 0.2
	}
}
