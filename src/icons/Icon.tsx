import React, { useMemo } from 'react';

import colors from '../constants/icon';

interface IIcon {
  currentColor?: string;
  size?: number;
  children(props: { color: string, width: number, height: number }): React.ReactNode;
}

const Icon: React.FC<IIcon> = ({
  currentColor = 'primary',
  size = 24,
  children
}) => {
  const color = useMemo(() => (colors[currentColor as keyof typeof colors] || currentColor), [currentColor]);
  const width = useMemo(() => (size / 2), [size]);
  const height = useMemo(() => (size / 2), [size]);

  return (
    <>
      {children({ color, width, height })}
    </>
  )
};

export default Icon;
