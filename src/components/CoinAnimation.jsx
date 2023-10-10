import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Coin = () => {
  const coinRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Animasyon
    coinRef.current.rotation.y += 0.01; // Y ekseninde dönme
    coinRef.current.rotation.x += 0.010; // X ekseninde dönme
    coinRef.current.rotation.z += 0.01; // Z ekseninde dönme
  });


  const textureLoader = new THREE.TextureLoader();

  textureLoader.load(
    "bengals.jpg",
    (texture) => {
      // Texture başarıyla yüklendiğinde yapılacak işlemler
      console.log("Bengals texture yüklendi:", texture);
    },
    (xhr) => {
      // Yükleme sırasında gerçekleşen ilerleme durumunu takip etmek için kullanabilirsiniz
      console.log((xhr.loaded / xhr.total) * 100 + "% tamamlandı");
    },
    (error) => {
      // Hata durumunda yapılacak işlemler
      console.error("Texture yüklenirken hata oluştu:", error);
    }
  );

  // İlk resim için texture
  const texture1 = new THREE.TextureLoader().load("");

  // İkinci resim için texture
  const texture2 = new THREE.TextureLoader().load("");

  const coinMaterials = [
    new THREE.MeshLambertMaterial({ map: texture1 }), // İlk yüzün texture'ı
    new THREE.MeshLambertMaterial({ map: texture2 }), // İkinci yüzün texture'ı
    new THREE.MeshLambertMaterial({ color: 0xffff00 }) // Diğer yüzlerin malzemesi
  ];

  const coinGeometry = new THREE.CylinderGeometry(1, 1, 0.2, 32); // Silindir geometrisi kullanarak madeni para şeklini oluşturuyoruz
  const coin = new THREE.Mesh(coinGeometry, coinMaterials);

  return (
    <mesh ref={coinRef}>
      <primitive object={coin} />
    </mesh>
  );
};

export default Coin;
