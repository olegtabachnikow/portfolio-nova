import { FC } from 'react';
import './Nova.css';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import { Stars } from './Stars';
import { OrbitControlsHelper } from './OrbitControlsHelper';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface NovaProps {
  isStarted: boolean;
}

export const Nova: FC<NovaProps> = ({ isStarted }) => {
  const cameraPosition = useSelector(
    (state: RootState) => state.cameraPosition
  );
  const cameraSettings: any = {
    fov: 45,
    near: 0.1,
    far: 100,
    position: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
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
