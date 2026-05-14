import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Float } from '@react-three/drei';

function FabricMesh() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2} position={[0, 0, -3]}>
        <planeGeometry args={[20, 20, 64, 64]} />
        <MeshDistortMaterial 
          color="#1c1c1c"
          envMapIntensity={0.8}
          clearcoat={0.2}
          clearcoatRoughness={0.7}
          metalness={0.8}
          roughness={0.5}
          distort={0.4}
          speed={1}
        />
      </mesh>
    </Float>
  );
}

export default function FabricBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
      <color attach="background" args={['#161618']} />
      <ambientLight intensity={0.4} />
      {/* Cinematic Soft Lighting */}
      <directionalLight position={[5, 10, 2]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={0.6} color="#8899ff" />
      <pointLight position={[0, -2, 1]} intensity={0.8} color="#ffffff" />
      
      <FabricMesh />
      
      <Environment preset="city" />
      {/* Soft moody fog */}
      <fog attach="fog" args={['#161618', 3, 10]} />
    </Canvas>
  );
}
