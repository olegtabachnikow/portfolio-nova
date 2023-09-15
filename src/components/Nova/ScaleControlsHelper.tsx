import { FC, useRef } from 'react';
import * as THREE from 'three';
import { TransformControls, TransformControlsProps } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setIsCameraMoving } from '../../redux/nova-is-moving-slice';

export const ScaleControlsHelper: FC<TransformControlsProps> = ({
  children,
}) => {
  const currentScale = useSelector((state: RootState) => state.novaTransform);
  const isMoving = useSelector((state: RootState) => state.isCameraMoving);
  const controlsRef = useRef<any>();
  const dispatch = useDispatch();
  const { scene } = useThree();

  const updateTransform = () => {
    dispatch(setIsCameraMoving({ isMoving: true }));
    const targetScale = new THREE.Vector3(
      currentScale.x,
      currentScale.y,
      currentScale.z
    );
    let t = 0;
    const duration = 0.5;

    const transform = () => {
      t += 1 / 60;
      const progress = Math.min(t / duration, 1);
      scene.scale.lerp(targetScale, progress);
      if (progress < 1) {
        requestAnimationFrame(transform);
      } else {
        dispatch(setIsCameraMoving({ isMoving: false }));
      }
    };

    requestAnimationFrame(transform);
  };

  useFrame(() => {
    if (isMoving.isMoving) {
      updateTransform();
    }
  });

  return (
    <TransformControls
      showX={false}
      showY={false}
      showZ={false}
      mode='scale'
      ref={controlsRef}
      enabled={false}
    >
      {children}
    </TransformControls>
  );
};
