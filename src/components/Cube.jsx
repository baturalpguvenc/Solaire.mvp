/*import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#191970"]} />
          <Text ref={textRef} fontSize={3} color="#555">
            Solaire
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube; */

//Daire İçin Eklediğim Kod
/*
import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Balloon = () => {
  const textRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    textRef.current.position.x = Math.sin(time) * 1;
    textRef.current.position.y = Math.cos(time) * 1;
    textRef.current.position.z = Math.sin(time) * 1;

    // Solaire yazısını merkezde döndürme
    textRef.current.rotation.x = Math.sin(time) * 0.05; // X ekseninde dönüş
    textRef.current.rotation.y = Math.cos(time) * 0.05; // Y ekseninde dönüş
    textRef.current.rotation.z = Math.sin(time) * 0.05; // Z ekseninde dönüş
  });

  return (
    <mesh>
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial
          attach="material"
          color="#007FFF" // Mavi renk (#007FFF)
          roughness={0.5}
          metalness={0.5}
        />
      </Sphere>
      <Text ref={textRef} fontSize={0.3} color="#00FF00">
        Solaire
      </Text>
    </mesh>
  );
};

export default Balloon;
*/

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GradientSphere = () => {
  const sphereRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    sphereRef.current.rotation.x = time;
    sphereRef.current.rotation.y = time;
  });

  const material = new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color("blue") },
      color2: { value: new THREE.Color("yellow") },
      color3: { value: new THREE.Color("green") },
      color4: { value: new THREE.Color("blue") },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      uniform vec3 color4;
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(mix(mix(color1, color2, vUv.y), color3, vUv.y), 1.0);
      }
    `,
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <primitive attach="material" object={material} />
    </mesh>
  );
};

export default GradientSphere;
