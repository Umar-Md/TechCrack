import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Preload, ContactShadows } from '@react-three/drei';
import TechCore from './TechCore';

const Scene = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        dpr={[1, 2]} // Performance optimization for high-res screens
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
          
          {/* Controls: Auto-rotate creates that "premium" agency feel */}
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          {/* Lighting: Cyberpunk Theme (Purple & Cyan) */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" /> {/* Cyan */}
          <spotLight 
            position={[-10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={2} 
            color="#a855f7" // Purple
          />

          {/* Environment Elements */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          {/* The Actual Model */}
          <TechCore />

          {/* Adds a soft shadow under the 3D model for realism */}
          <ContactShadows 
            position={[0, -2.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={4.5} 
          />
          
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;   