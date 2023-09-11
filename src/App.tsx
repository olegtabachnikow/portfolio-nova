import { FC } from 'react';
import { Nova } from './components/Nova/Nova';
import { useDispatch } from 'react-redux';
import { setCameraPosition } from './redux/nova-position-slice';
import { setIsCameraMoving } from './redux/nova-is-moving-slice';
import { setTransform } from './redux/nova-transform-slice';

export const App: FC = () => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setTransform({ x: 1, y: 1, z: 1 }));
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 20, y: 50, z: 50 }));
  }
  function handleClickNumberTwo() {
    dispatch(setTransform({ x: 4, y: 4, z: 1 }));
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 10, y: 50, z: 10 }));
  }
  function handleClickNumberThree() {
    dispatch(setTransform({ x: 4, y: 4, z: 1 }));
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 40, y: 10, z: 10 }));
  }
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <button
        onClick={handleClick}
        style={{ position: 'absolute', top: 100, left: 100, zIndex: 1 }}
      >
        One
      </button>
      <button
        onClick={handleClickNumberTwo}
        style={{ position: 'absolute', top: 100, right: 100, zIndex: 1 }}
      >
        Two
      </button>
      <button
        onClick={handleClickNumberThree}
        style={{ position: 'absolute', top: 100, right: 400, zIndex: 1 }}
      >
        Three
      </button>
      <Nova />
    </div>
  );
};
