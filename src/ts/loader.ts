import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import type THREE from 'three';

const loadGLTF = async (modelPath, dracoPath, scene : THREE.Scene) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(dracoPath);
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);
        
    await gltfLoader.loadAsync(
        modelPath).then((gltf) => {
            scene.add(gltf.scene);
        }
    );
}

export {loadGLTF}