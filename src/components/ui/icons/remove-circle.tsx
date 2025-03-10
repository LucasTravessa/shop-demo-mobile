import React from 'react';
import {
  ClipPath,
  Defs,
  G,
  Path,
  Rect,
  Svg,
  type SvgProps,
} from 'react-native-svg';

export function RemoveCircle({ color = '#007CC2', ...props }: SvgProps) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#clip0_40_2268)">
        <Path
          d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_40_2268">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
