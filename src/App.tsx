import { FC, useEffect, useLayoutEffect } from 'react';
import '../node_modules/normalize.css/normalize.css';
import { Nova } from './components/Nova/Nova';
import { useDispatch } from 'react-redux';
import { setCameraPosition } from './redux/nova-position-slice';
import { setIsCameraMoving } from './redux/nova-is-moving-slice';
import { setTransform } from './redux/nova-scale-slice';
import { Card } from './components/ui/Card/Card';
import { useLocation, useNavigate } from 'react-router-dom';

export const App: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  function handleFirstMove() {
    dispatch(setTransform({ x: 1, y: 1, z: 1 }));
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 10, y: 15, z: 35 }));
  }
  function handleSecondMove() {
    dispatch(setTransform({ x: 2, y: 2, z: 2 }));
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 20, y: 50, z: 20 }));
  }
  function handleThirdMove() {
    dispatch(setTransform({ x: 2, y: 2, z: 2 }));
    dispatch(setIsCameraMoving({ isMoving: true }));
    dispatch(setCameraPosition({ x: 15, y: 13, z: 15 }));
  }

  useLayoutEffect(() => {
    navigate('/about');
  }, []);

  useEffect(() => {
    navigate('/about');
  }, []);

  useEffect(() => {
    location.pathname === '/about' && handleFirstMove();
    location.pathname === '/experience' && handleSecondMove();
    location.pathname === '/contact' && handleThirdMove();
  });

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Nova />
      <Card />
    </div>
  );
};
