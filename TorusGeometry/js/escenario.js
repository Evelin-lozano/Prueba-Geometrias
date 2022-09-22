//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader()
loader.load('./imagenes/fondo-gotas.jpg', function(textura){
	scene.background = textura;
});
//camara
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshStandardMaterial( { color: 0x4CCD46 } );
const Torus = new THREE.Mesh (geometry, material );
material.metalness = 0.1;
material.roughness = 0.5;

const directionalLight = new THREE.DirectionalLight( 0xffffff, 5 );
scene.add(directionalLight);
scene.add(Torus)

/* const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./imagenes/texturametal.jpg'); */

/* const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading; */

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

camera.position.z = 45;

//animacion
function animate() {
	requestAnimationFrame( animate );
	Torus.rotation.x+=0.01;

	line.rotation.x += 0.01;
	renderer.render( scene, camera );
}
animate();