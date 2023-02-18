import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Center,
  Caustics as _Caustics,
  Environment,
  Lightformer,
  RandomizedLight,
  PerformanceMonitor,
  AccumulativeShadows,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";

const innerMaterial = new THREE.MeshStandardMaterial({
  transparent: true,
  opacity: 1,
  color: "black",
  roughness: 0,
  side: THREE.FrontSide,
  blending: THREE.AdditiveBlending,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  envMapIntensity: 2,
});

export const Caustics = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      eventPrefix="client"
      camera={{ position: [0, 6, 0], fov: 45 }}
    >
      <OrbitControls />
      <color attach="background" args={["#111"]} />
      <group
        position={[0, -0.5, 0]}
        rotation={[0, -0.75, 0]}
      >
        <group dispose={null}>
          {/* <Center
            rotation={[0, -0.4, 0]}
            position={[-1, -0.01, -2]}
            top
          >
            <mesh
              scale={1.2}
              castShadow
              geometry={nodes.flowers.geometry}
              material={materials["draifrawer_u1_v1.001"]}
            />
          </Center> */}

          <_Caustics
            causticsOnly={false}
            backside={false}
            debug={false}
            color={[207 / 255, 250 / 255, 254 / 255]} //rgb(207 250 254)
            lightSource={[2, -2.5, 2.5]}
            intensity={0.005}
            worldRadius={0.66 / 10}
            ior={0.6}
            backsideIOR={1.26}
          >
            <mesh castShadow receiveShadow>
              {/* <boxGeometry args={[1, 1, 1]} /> */}
              <planeGeometry args={[1, 1]} />

              <MeshTransmissionMaterial
                distortionScale={1}
                temporalDistortion={1}
                thickness={0.2}
                chromaticAberration={0.05}
                anisotropy={1.5}
                clearcoat={1}
                clearcoatRoughness={0.2}
                envMapIntensity={3}
              />
            </mesh>
          </_Caustics>
        </group>
        <AccumulativeShadows
          frames={100}
          alphaTest={0.85}
          opacity={0.8}
          color="red"
          scale={20}
          position={[0, -0.005, 0]}
        >
          <RandomizedLight
            amount={8}
            radius={6}
            ambient={0.5}
            intensity={1}
            position={[-1.5, 2.5, -2.5]}
            bias={0.001}
          />
        </AccumulativeShadows>
      </group>
    </Canvas>
  );
};
