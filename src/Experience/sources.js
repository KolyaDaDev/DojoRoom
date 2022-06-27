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
]
