import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export default function Solar({ color, ...props }) {
  const { nodes, materials } = useGLTF("/solar.glb"); // Dosya yolu düzeltildi
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solar.geometry}
        material={materials.solarMaterials}
        material-envMapIntensity={0.8}
      />
      <mesh castShadow receiveShadow geometry={nodes.solar_1.geometry}>
        <meshStandardMaterial
          color={color}
          aoMap={materials.mesh.aoMap}
          normalMap={materials.mesh.normalMap}
          normalMap-encoding={THREE.LinearEncoding}
          roughnessMap={materials.mesh.roughnessMap}
          metalnessMap={materials.mesh.metalnessMap}
          envMapIntensity={0.8}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solar_2.geometry}
        material={materials.caps}
        material-envMapIntensity={0.8}
      />
      {/* Diğer parçalar */}
    </group>
  );
}

useGLTF.preload("/solar.glb"); // Dosya yolu düzeltildi
