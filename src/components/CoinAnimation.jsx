import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Coin = () => {
  const coinRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Animasyon - Yavaşça y ekseninde dönme
    coinRef.current.rotation.y = 0.005 * time; // Y ekseninde dönme
  });

  const textureLoader = new THREE.TextureLoader();

  // Resmi yükledim.
  textureLoader.load(
    "./public/img/sittaris_son.png",
    (texture) => {
      // detaylar...
      console.log("Texture yüklendi:", texture);

      const coinMaterials = [
        new THREE.MeshBasicMaterial({ color: 0xFFA500 }), // Kenar kısımlarının gradient turuncu malzemesi
        new THREE.MeshBasicMaterial({ map: texture }), // Ön yüzün texture'ı
        new THREE.MeshLambertMaterial({ map: texture }), // Arka yüzün texture'ı
        new THREE.MeshBasicMaterial({ color: 0xFFA500 }), // Kenar kısımlarının gradient turuncu malzemesi
        new THREE.MeshBasicMaterial({ color: 0xFFA500 }), // Kenar kısımlarının gradient turuncu malzemesi
        new THREE.MeshBasicMaterial({ color: 0xFFA500 })  // Kenar kısımlarının gradient turuncu malzemesi
      ];

      //yüzler ve coin'in yan tarafı karışmış olabilir yorum satırlarında.

      const coinGeometry = new THREE.CylinderGeometry(1, 1, 0.2, 32); // Silindir geometrisi kullanarak madeni para şeklini oluşturuyoruz
      const coin = new THREE.Mesh(coinGeometry, coinMaterials);
      coinRef.current.add(coin);
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

  return (
    <mesh ref={coinRef}>
      {/* Diğer işlemler */}
    </mesh>
  );
};

export default Coin;
