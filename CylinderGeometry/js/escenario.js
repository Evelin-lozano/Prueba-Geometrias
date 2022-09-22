//escena
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader()
loader.load('./imagenes/fondo-marmol2.jpg', function(textura){
	scene.background = textura;
});

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
scene.fog = new THREE.Fog( 0xFA500B, 0.015, 80);
const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
/* const material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); */

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./imagenes/textura6.jpg');

const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading;

const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );


camera.position.z=35;
camera.position.x=-3;


//animacion
function animate() {
	requestAnimationFrame( animate );
	cylinder.rotation.x += 0.03;

	line.rotation.x += 0.03;
	renderer.render( scene, camera );
}
animate();
