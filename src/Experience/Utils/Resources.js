import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import EventEmitter from './EventEmitter.js'
import ZoomInOnLoad from '../World/animations/ZoomInOnLoad.js'

export default class Resources extends EventEmitter {
	constructor(sources) {
		super()

		this.sources = sources

		this.items = {}
		this.toLoad = this.sources.length
		this.loaded = 0

		// animation

		this.loadingManager = new THREE.LoadingManager(
			// activate when loaded
			() => {
				window.setTimeout(() => {
					// overlay animation

					// update loading element
					// this.loadingBarElement.classList.add('ended')
					// this.loadingBarText.classList.add('ended')
					// this.loadingBarElement.style.transform = ''
					this.zoomOnLoad = new ZoomInOnLoad()
					this.zoomOnLoad.setZoomAction()
				}, 4000)
			},
			// activate during progression
			(itemUrl, itemsLoaded, itemsTotal) => {
				// calculate progress and transform loading loadingBarElement
				const progressRatio = itemsLoaded / itemsTotal
				// this.loadingBarElement.style.transform = `scaleX(${progressRatio})`
				console.log(progressRatio)
			}
		)

		this.setLoaders()
		this.startLoading()
	}

	setLoaders() {
		this.loaders = {}
		this.loaders.dracoLoader = new DRACOLoader(this.loadingManager)
		this.loaders.dracoLoader.setDecoderPath('/draco/')
		this.loaders.gltfLoader = new GLTFLoader(this.loadingManager)
		this.loaders.gltfLoader.dracoLoader = this.loaders.dracoLoader
		this.loaders.textureLoader = new THREE.TextureLoader(this.loadingManager)
		this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader(
			this.loadingManager
		)
	}

	startLoading() {
		// Load each source
		for (const source of this.sources) {
			if (source.type === 'gltfModel') {
				this.loaders.gltfLoader.load(source.path, (file) => {
					this.sourceLoaded(source, file)
				})
			} else if (source.type === 'texture') {
				this.loaders.textureLoader.load(source.path, (file) => {
					this.sourceLoaded(source, file)
				})
			} else if (source.type === 'cubeTexture') {
				this.loaders.cubeTextureLoader.load(source.path, (file) => {
					this.sourceLoaded(source, file)
				})
			}
		}
	}

	sourceLoaded(source, file) {
		this.items[source.name] = file

		this.loaded++

		if (this.loaded === this.toLoad) {
			this.trigger('ready')
		}
	}
}
