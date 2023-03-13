import "./App.css";
import * as THREE from "three";

function App() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("bg"),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    renderer.render(scene, camera);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({
        color: 0xff6347,
        wireframe: true,
    });

    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    function animate() {
        requestAnimationFrame(animate);

        torus.rotation.x += 0.001;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.001;
        renderer.render(scene, camera);
    }

    animate();

    return <div className="App"></div>;
}

export default App;
