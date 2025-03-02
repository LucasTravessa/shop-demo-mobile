import React from 'react';
import { Path, Svg, type SvgProps } from 'react-native-svg';

export default function Catalog({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width="18" height="16" viewBox="0 0 18 16" fill="none" {...props}>
      <Path
        d="M17 0H1V2H17V0ZM18 10V8L17 3H1L0 8V10H1V16H11V10H15V16H17V10H18ZM9 14H3V10H9V14Z"
        fill={color}
      />
    </Svg>
  );
}
