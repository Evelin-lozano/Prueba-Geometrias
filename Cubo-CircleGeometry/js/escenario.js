//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x998899)
scene.fog = new THREE.Fog( 0xffffff, 0.015, 80);

//camara
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.CircleGeometry( 10, 32 );
const material = new THREE.MeshBasicMaterial( { color: 0x5B2C6F } );
const circle = new THREE.Mesh( geometry, material );
scene.add( circle );

camera.position.x=25;
camera.position.z=25;

//animacion
function animate() {
	requestAnimationFrame( animate );
	circle.rotation.x += 0.03;
	renderer.render( scene, camera );
}
animate();
