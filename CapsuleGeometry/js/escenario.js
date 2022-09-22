//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x067A26)

//camara
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.CapsuleGeometry( 6, 6, 6, 6 );
/* const material = new THREE.MeshBasicMaterial( {color: 0x24C6F6} ); */

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./imagenes/textura3.jpg');

const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading;

const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

camera.position.z = 30;


//animacion
function animate() {
	requestAnimationFrame( animate );
	capsule.rotation.y += 0.01;
	capsule.rotation.x += 0.01;
	capsule.rotation.z += 0.01;

	line.rotation.y += 0.01;
	line.rotation.x += 0.01;
	line.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();