//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader()
loader.load('./imagenes/fondo-verde.png', function(textura){
	scene.background = textura;
});

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( {color: 0xac16f} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.x=-3;
camera.position.z=5;

//animacion
function animate() {
	requestAnimationFrame( animate );
	cube.rotation.y += 0.01; 
	cube.rotation.z += 0.02;
	renderer.render( scene, camera );
}
animate();
