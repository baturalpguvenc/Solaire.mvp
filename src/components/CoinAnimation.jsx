import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const LogoSpinner = () => {
  const logoRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Logo'yu yavaşça y ekseninde döndürme
    logoRef.current.rotation.y = 0.005 * time;
  });

  const textureLoader = new THREE.TextureLoader();

  // Logo resmini yükleyin
  textureLoader.load(
    "/img/varlık.png", // Logo resminizin yolunu ekleyin
    (texture) => {
      // Texture yüklendiğinde yapılacak işlemler
      console.log("Texture yüklendi:", texture);

      const logoMaterial = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: texture,
        transparent: false, // Arka planın saydam olmasını sağlar
        alphaTest: 0.2, // Daha iyi saydamlık için alpha test değeri
      });

      const logoGeometry = new THREE.PlaneGeometry(2, 2); // Logo'nun düzlem geometrisi

      const logo = new THREE.Mesh(logoGeometry, logoMaterial);
      logoRef.current.add(logo);
    },
    (xhr) => {
      // Yükleme sırasında ilerleme durumunu takip etmek için kullanabilirsiniz
      console.log((xhr.loaded / xhr.total) * 100 + "% tamamlandı");
    },
    (error) => {
      // Hata durumunda yapılacak işlemler
      console.error("Texture yüklenirken hata oluştu:", error);
    }
  );

  return (
    <mesh ref={logoRef}>
      {/* Diğer işlemler */}
    </mesh>
  );
};

export default LogoSpinner;
