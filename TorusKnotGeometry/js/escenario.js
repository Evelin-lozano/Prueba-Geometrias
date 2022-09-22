//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xBDCDF1) 

//camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
/* const material = new THREE.MeshBasicMaterial( { color: 0x03660C } ); */

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./imagenes/textura2.jpg');

const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading;

const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

camera.position.z= 40;

//animacion
function animate() {
	requestAnimationFrame( animate );
	torusKnot.rotation.y += 0.01;
	torusKnot.rotation.z += 0.02;

	line.rotation.y += 0.01;
	line.rotation.z += 0.02;
	renderer.render( scene, camera );
}
animate();