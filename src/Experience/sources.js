export default [
	{
		name: 'environmentMapTexture',
		type: 'cubeTexture',
		path: [
			'textures/environmentMap/px.jpg',
			'textures/environmentMap/nx.jpg',
			'textures/environmentMap/py.jpg',
			'textures/environmentMap/ny.jpg',
			'textures/environmentMap/pz.jpg',
			'textures/environmentMap/nz.jpg',
		],
	},
	{
		name: 'objects',
		type: 'gltfModel',
		path: 'models/objects.glb',
	},
	{
		name: 'objectsBakedTexture',
		type: 'texture',
		path: 'models/bakedObjects.jpg',
	},
	{
		name: 'floor',
		type: 'gltfModel',
		path: 'models/floor.glb',
	},
	{
		name: 'floorBakedTexture',
		type: 'texture',
		path: 'models/bakedFloor.jpg',
	},
	{
		name: 'walls',
		type: 'gltfModel',
		path: 'models/walls.glb',
	},
	{
		name: 'wallsBakedTexture',
		type: 'texture',
		path: 'models/bakedWalls.jpg',
	},
]
