//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader()
loader.load('./imagenes/fondo-morado.jpg', function(textura){
	scene.background = textura;
});

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.SphereGeometry( 15, 32, 16 );
/* const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); */

const material2 = new THREE.MeshNormalMaterial();
material2.flatShading = true;

const sphere = new THREE.Mesh( geometry, material2 );
scene.add( sphere );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

camera.position.x=10;
camera.position.z=40;

//animacion
function animate() {
	requestAnimationFrame( animate );
	sphere.rotation.z += 0.01; 
	sphere.rotation.x += 0.01; 

	line.rotation.z += 0.01; 
    line.rotation.x += 0.01;
	renderer.render( scene, camera );
}
animate();
