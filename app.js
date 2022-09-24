const scene = new THREE.Scene();
scene.background = new THREE.Color();

var loader = new THREE.TextureLoader();
loader.load('./images/Ciudad.png', function(texture){
	scene.background = texture;

})



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.x = 600;
camera.position.y = 300;
camera.position.z = 450;




const hlight = new THREE.AmbientLight(0x404040,6);
scene.add(hlight);
/*
directionalLight = new THREE.DirectionalLight(0xffffff,100);
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight)
*/
/*  light = new THREE.PointLight(0xc4c4c4,10);
light.position.set(10,2000,500);
scene.add(light)  */



const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('./nino/nino.gltf', (gltf) =>{
    

    var objetoloader = gltf.scene;
    objetoloader.position.x = 1050
    objetoloader.rotation.y = 49
    
    scene.add(gltf.scene)
    animate();
});

const gltfLoader1 = new THREE.GLTFLoader();
gltfLoader1.load('./policia/scene.gltf', (gltf) =>{
    
    var objetoloader1 = gltf.scene;
    objetoloader1.position.x = 100
    objetoloader1.position.y = 100
    objetoloader1.rotation.y = 121
    objetoloader1.scale.set(0.3,0.3,0.3)
    scene.add(gltf.scene)
    animate();
});

const gltfLoader2 = new THREE.GLTFLoader();
gltfLoader2.load('./basura/scene.gltf', (gltf) =>{
    
    const light = new THREE.DirectionalLight(0xffffff,1);
    scene.add(light);

    
    
    var objetoloader2 = gltf.scene;
    objetoloader2.position.x = 550
    objetoloader2.position.z = 5
    objetoloader2.position.y = 15
    objetoloader2.rotation.y = 25
    objetoloader2.rotation.x = 25
    
       
    const dControls = new THREE.DragControls([objetoloader2], camera, renderer.domElement)
    dControls.deactivate()
    dControls.activate()
    
    objetoloader2.scale.set(0.5,0.5,0.5)
    scene.add(gltf.scene)
    animate();
});





function animate() {
    renderer.render(scene,camera)
    requestAnimationFrame(animate) 
}

