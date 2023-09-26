import { FC } from 'react';
import './Nova.css';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import { Stars } from './Stars';
import { OrbitControlsHelper } from './OrbitControlsHelper';

interface NovaProps {
  isStarted: boolean;
}

export const Nova: FC<NovaProps> = ({ isStarted }) => {
  const cameraSettings: any = {
    fov: 45,
    near: 0.1,
    far: 100,
    position: [0, 0, 50],
  };

  return (
    <div className='nova-container'>
      <Canvas
        camera={cameraSettings}
        gl={{
          antialias: false,
          toneMapping: THREE.LinearToneMapping,
          outputColorSpace: THREE.LinearSRGBColorSpace,
        }}
      >
        <AdaptiveDpr pixelated />
        <Stars isStarted={isStarted} />
        <OrbitControlsHelper />
      </Canvas>
    </div>
  );
};
