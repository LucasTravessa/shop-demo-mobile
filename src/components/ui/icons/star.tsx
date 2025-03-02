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

export default function Star({
  width = 25,
  height = 25,
  color = '#FFCD48',
  ...props
}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_32_2097)">
        <Path
          d="M9.99167 1.66666C5.39167 1.66666 1.66667 5.39999 1.66667 9.99999C1.66667 14.6 5.39167 18.3333 9.99167 18.3333C14.6 18.3333 18.3333 14.6 18.3333 9.99999C18.3333 5.39999 14.6 1.66666 9.99167 1.66666ZM13.525 15L10 12.875L6.475 15L7.40834 10.9917L4.3 8.29999L8.4 7.94999L10 4.16666L11.6 7.94166L15.7 8.29166L12.5917 10.9833L13.525 15Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_32_2097">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
