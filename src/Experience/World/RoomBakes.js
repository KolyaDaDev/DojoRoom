import * as THREE from 'three'
import Experience from '../Experience'
import Vertex from '../World/shaders/images/vertex.glsl'
import Fragment from '../World/shaders/images/fragment.glsl'
import TextureHelper from './TextureHelper'

export default class RoomBakes {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		// -> Day
		this.bakedDay = new TextureHelper('bakedDay')
		this.helioDay = new TextureHelper('helioDay')
		this.kanoDay = new TextureHelper('kanoDay')
		this.rightSymbolDay = new TextureHelper('rightSymbolDay')
		this.leftSymbolDay = new TextureHelper('leftSymbolDay')
		this.symbolDay = new TextureHelper('symbolDay')
		this.whiteOnlyDay = new TextureHelper('whiteOnlyDay')

		// -> Night
		this.bakedSunset = new TextureHelper('bakedSunset')
		this.helioSunset = new TextureHelper('helioSunset')
		this.kanoSunset = new TextureHelper('kanoSunset')
		this.rightSymbolSunset = new TextureHelper('rightSymbolSunset')
		this.leftSymbolSunset = new TextureHelper('leftSymbolSunset')
		this.symbolSunset = new TextureHelper('symbolSunset')

		// this. = new TextureHelper('')
		// this. = new TextureHelper('')
		// this. = new TextureHelper('')
		// this. = new TextureHelper('')
	}
}
