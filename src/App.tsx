import { CSSProperties, FC, useEffect, useLayoutEffect, useState } from 'react';
import { Nova } from './components/Nova/Nova';
import { useDispatch } from 'react-redux';
import { setCameraPosition } from './redux/nova-position-slice';
import { setIsCameraMoving } from './redux/nova-is-moving-slice';
import { setTransform } from './redux/nova-scale-slice';
import { Card } from './components/ui/Card/Card';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

interface DimensionType {
  width: number | string;
  height: number | string;
}

export const App: FC = () => {
  const [dimensions, setDimensions] = useState<DimensionType>({
    width: '100vw',
    height: '100vh',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });

  function handleResize() {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return window.removeEventListener('resize', handleResize);
  });

  const containerStyle: CSSProperties = {
    height: dimensions.height,
    width: dimensions.width,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

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

  return isTabletOrMobile && isLandscape ? (
    <div style={{ ...containerStyle, color: 'white' }}>Rotate device</div>
  ) : (
    <div style={containerStyle}>
      <Nova />
      <Card />
    </div>
  );
};
