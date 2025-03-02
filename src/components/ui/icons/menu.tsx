import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

export default function Menu({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5C1 4.30964 1.51301 3.75 2.14583 3.75H21.8542C22.487 3.75 23 4.30964 23 5C23 5.69036 22.487 6.25 21.8542 6.25H2.14583C1.51301 6.25 1 5.69036 1 5ZM1 12C1 11.3096 1.51301 10.75 2.14583 10.75H21.8542C22.487 10.75 23 11.3096 23 12C23 12.6904 22.487 13.25 21.8542 13.25H2.14583C1.51301 13.25 1 12.6904 1 12ZM2.14583 17.75C1.51301 17.75 1 18.3096 1 19C1 19.6904 1.51301 20.25 2.14583 20.25H21.8542C22.487 20.25 23 19.6904 23 19C23 18.3096 22.487 17.75 21.8542 17.75H2.14583Z"
        fill={color}
      />
    </Svg>
  );
}
