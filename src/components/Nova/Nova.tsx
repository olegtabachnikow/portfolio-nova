import { FC } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Points } from './Points';
import { OrbitControlsHelper } from './OrbitControlsHelper';
import { TransformControlsHelper } from './TransformControlsHelper';

export const Nova: FC = () => {
  const cameraSettings: any = {
    fov: 45,
    near: 0.1,
    far: 100,
    position: [0, 0, 50],
  };

  return (
    <Canvas
      camera={cameraSettings}
      gl={{
        antialias: false,
        toneMapping: THREE.LinearToneMapping,
        outputColorSpace: THREE.LinearSRGBColorSpace,
      }}
    >
      <TransformControlsHelper>
        <Points />
      </TransformControlsHelper>
      <OrbitControlsHelper />
    </Canvas>
  );
};
