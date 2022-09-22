//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbbbb0)

//camara
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.ConeGeometry( 5, 20, 32 );
/* const material = new THREE.MeshBasicMaterial( {color: 034847} ); */

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./imagenes/textura5.jpg');

const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading;

const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

camera.position.z = 30;


//animacion
function animate() {
	requestAnimationFrame( animate );
	cone.rotation.x += 0.01;

	line.rotation.x += 0.01;
	renderer.render( scene, camera );
}
animate();