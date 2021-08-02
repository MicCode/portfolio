import './style.css'

import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new Three.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

/*const geometry = new Three.IcosahedronGeometry(10);
const material = new Three.MeshStandardMaterial({ color: 0xFFFF00 });
const isocahedron = new Three.Mesh(geometry, material);
scene.add(isocahedron);*/

const pointLight = new Three.PointLight(0xFFFFFF);
pointLight.position.set(10, 10, 10);
const ambientLight = new Three.AmbientLight(0xFF0000, 0.1);
scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);
// const orbitControls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const g = new Three.SphereGeometry(0.05, 24, 24);
  const m = new Three.MeshStandardMaterial({color: 0xFFFFFF});
  const star = new Three.Mesh(g, m);

  const [x,y,z] = Array(3).fill().map(() => Three.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);

  scene.add(star);
}

Array(1000).fill().forEach(addStar);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // isocahedron.rotation.x += 0.05;
  // isocahedron.rotation.Y += 0.075;
  // isocahedron.rotation.Z += 0.05;

  //camera.position.z = t * -0.01;
  camera.position.y = t * -0.005;
  //camera.rotation.y = t * -0.0002;
}
document.body.onscroll = moveCamera


function animate() {
  requestAnimationFrame(animate);

  // orbitControls.update();
  renderer.render(scene, camera);
}

animate();