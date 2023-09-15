import { FC } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Stars } from './Stars';
import { OrbitControlsHelper } from './OrbitControlsHelper';
import { ScaleControlsHelper } from './ScaleControlsHelper';

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
      <ScaleControlsHelper>
        <Stars />
      </ScaleControlsHelper>
      <OrbitControlsHelper />
    </Canvas>
  );
};
