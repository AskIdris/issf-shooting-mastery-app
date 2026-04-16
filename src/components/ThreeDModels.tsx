import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function Pistol() {
  const group = useRef<THREE.Group>(null);

  return (
    <group ref={group}>
      {/* Barrel */}
      <mesh position={[0, 0.2, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 32]} />
        <meshStandardMaterial color="#2d3436" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Frame / Receiver */}
      <mesh position={[0, 0.1, -0.1]}>
        <boxGeometry args={[0.12, 0.2, 0.6]} />
        <meshStandardMaterial color="#2d3436" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Grip */}
      <mesh position={[0, -0.3, -0.2]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[0.1, 0.5, 0.2]} />
        <meshStandardMaterial color="#8b4513" roughness={0.8} />
      </mesh>

      {/* Trigger Guard */}
      <mesh position={[0, -0.05, 0.1]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.08, 0.01, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#2d3436" />
      </mesh>

      {/* Sights */}
      <mesh position={[0, 0.3, 1.0]}>
        <boxGeometry args={[0.02, 0.05, 0.02]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      <mesh position={[0, 0.3, -0.3]}>
        <boxGeometry args={[0.08, 0.05, 0.02]} />
        <meshStandardMaterial color="#000" />
      </mesh>
    </group>
  );
}

function Humanoid({ stance = 'olympic' }) {
  return (
    <group>
      {/* Torso */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 0.6, 16]} />
        <meshStandardMaterial color="#3498db" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.45, 0]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#f3e5ab" />
      </mesh>

      {/* Shooting Arm */}
      <group position={[0.2, 1.2, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.05, 0.04, 0.6, 16]} />
          <meshStandardMaterial color="#3498db" />
        </mesh>
        {/* Forearm */}
        <group position={[0.6, 0, 0]}>
          <mesh position={[0.25, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.03, 0.5, 16]} />
            <meshStandardMaterial color="#f3e5ab" />
          </mesh>
          {/* Hand holding pistol */}
          <group position={[0.5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={0.3}>
            <Pistol />
          </group>
        </group>
      </group>

      {/* Non-Shooting Arm (in pocket) */}
      <group position={[-0.2, 1.2, 0]} rotation={[0, 0, 0.5]}>
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.05, 0.04, 0.5, 16]} />
          <meshStandardMaterial color="#3498db" />
        </mesh>
      </group>

      {/* Legs */}
      <mesh position={[-0.15, 0.35, 0]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.08, 0.06, 0.7, 16]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      <mesh position={[0.15, 0.35, 0]} rotation={[0, 0, -0.1]}>
        <cylinderGeometry args={[0.08, 0.06, 0.7, 16]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
    </group>
  );
}

export const PistolViewer = () => (
  <div className="w-full h-[400px] bg-gray-900 rounded-3xl overflow-hidden relative border border-gray-800">
    <div className="absolute top-4 left-4 z-10">
      <h3 className="text-white font-bold text-sm uppercase tracking-widest">Interactive Grip 3D</h3>
      <p className="text-gray-400 text-[10px]">Rotate to inspect the high backstrap and finger placement</p>
    </div>
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[2, 1, 2]} />
      <OrbitControls enablePan={false} minDistance={1} maxDistance={5} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Pistol />
      </Float>
      <ContactShadows position={[0, -0.8, 0]} opacity={0.4} scale={10} blur={2} far={1} />
      <Environment preset="city" />
    </Canvas>
  </div>
);

export const StanceViewer = () => (
  <div className="w-full h-[400px] bg-gray-900 rounded-3xl overflow-hidden relative border border-gray-800">
    <div className="absolute top-4 left-4 z-10">
      <h3 className="text-white font-bold text-sm uppercase tracking-widest">Olympic Stance 3D</h3>
      <p className="text-gray-400 text-[10px]">Inspect the 45-degree angle and skeletal alignment</p>
    </div>
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[3, 2, 3]} />
      <OrbitControls enablePan={false} minDistance={2} maxDistance={6} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Humanoid />
      <ContactShadows position={[0, 0, 0]} opacity={0.4} scale={10} blur={2} far={1} />
      <Environment preset="city" />
    </Canvas>
  </div>
);
