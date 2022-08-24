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
const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 30;


//animacion
function animate() {
	requestAnimationFrame( animate );
	cone.rotation.x += 0.01;
	renderer.render( scene, camera );
}
animate();