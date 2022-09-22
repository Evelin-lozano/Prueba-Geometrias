//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader()
loader.load('./imagenes/fondo-verde3.jpg', function(textura){
	scene.background = textura;
});

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Orbit-controls
/* var control = new THREE.OrbitControls( camera, renderer.domElement );
control.minDistance = 5;
control.maxDistance = 15;  */
//fin Orbit-controls

//PointerLockcontrols
/* const PointerLockControls = new THREE.PointerLockControls( camera, renderer.domElement );
document.getElementById('btnplay').onclick = ( ) => {
	PointerLockControls.lock();
} */
// fin PointerLockcontrols

//geometria
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./imagenes/textura1.jpg');
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading;

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//geometria1
const cube1 = new THREE.Mesh( geometry, material );
scene.add( cube1 );
cube1.position.set(6,0,0);

//geometria2
const cube2 = new THREE.Mesh( geometry, material );
scene.add( cube2 );
cube2.position.set(-4,0,0);

//geometria3
const cube3 = new THREE.Mesh( geometry, material );
scene.add( cube3 );
cube3.position.set(3,0,0);

//lineas
/* const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );  */
//fin lineas

//Dragcontrols
 let objects = [cube, cube1,cube2, cube3]

const dcontrols = new THREE.DragControls( objects, camera, renderer.domElement );
dcontrols.enabled = true;

dcontrols.deactivate();
dcontrols.activate();

dcontrols.addEventListener("hoveron", function (event){

    //console.log.apply(event.object)
    event.object.material.wireframe = true;
	event.object.scale.y *=4;
});

dcontrols.addEventListener("hoveroff", function (event){

	//console.log.apply(event.object)
	 event.object.material.wireframe = false;
	 event.object.scale.y /=4;
 });
 //fin Dragcontrols
 
//Flycontrols
const flycontrols = new THREE.FlyControls (camera, renderer.domElement);
flycontrols.movementSpeed =50;
flycontrols.rollSpeed =0.01;
flycontrols.autoForward =false;
flycontrols.dragTolock =false;
//fin Flycontrols

camera.position.x=1;
camera.position.z=5;
camera.position.y=0.1;


//animacion
function animate() {
	requestAnimationFrame( animate );
	cube.rotation.y += 0.01; 
	cube.rotation.x += 0.01; 
	flycontrols.update(0.5);

	/* cube1.rotation.y += 0.01; 
	cube1.rotation.x += 0.01; 

	cube2.rotation.y += 0.01; 
	cube2.rotation.x += 0.01; 

	cube3.rotation.y += 0.01; 
	cube3.rotation.x += 0.01;  */

	/* line.rotation.y += 0.01; 
    line.rotation.x += 0.01;  */
	renderer.render( scene, camera );
}
animate();
