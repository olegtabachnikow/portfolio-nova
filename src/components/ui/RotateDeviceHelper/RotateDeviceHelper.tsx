import { CSSProperties, FC } from 'react';

interface RotateDeviceHelperProps {
  styles: CSSProperties;
  handler: () => void;
}

export const RotateDeviceHelper: FC<RotateDeviceHelperProps> = ({
  styles,
  handler,
}) => {
  handler();
  return (
    <div style={styles}>
      <div className='space' />
      <span className='help-text'>Rotate the device</span>
    </div>
  );
};
