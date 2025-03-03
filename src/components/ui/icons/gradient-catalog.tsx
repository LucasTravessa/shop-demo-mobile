import React from 'react';
import {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Svg,
  type SvgProps,
} from 'react-native-svg';

export function GradientCatalog({ ...props }: SvgProps) {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <G clipPath="url(#clip0_32_1096)">
        <Path
          d="M20 4.75H4V6.75H20V4.75ZM21 14.75V12.75L20 7.75H4L3 12.75V14.75H4V20.75H14V14.75H18V20.75H20V14.75H21ZM12 18.75H6V14.75H12V18.75Z"
          fill="url(#paint0_linear_32_1096)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_32_1096"
          x1="21"
          y1="18.8949"
          x2="5.33973"
          y2="5.69261"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#28CE9C" />
          <Stop offset="1" stopColor="#6AC9FF" />
        </LinearGradient>
        <ClipPath id="clip0_32_1096">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.75)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
