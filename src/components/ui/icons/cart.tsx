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

export default function Cart({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <G clipPath="url(#clip0_32_1099)">
        <Path
          d="M7 18.25C5.9 18.25 5.01 19.15 5.01 20.25C5.01 21.35 5.9 22.25 7 22.25C8.1 22.25 9 21.35 9 20.25C9 19.15 8.1 18.25 7 18.25ZM1 2.25V4.25H3L6.6 11.84L5.25 14.29C5.09 14.57 5 14.9 5 15.25C5 16.35 5.9 17.25 7 17.25H19V15.25H7.42C7.28 15.25 7.17 15.14 7.17 15L7.2 14.88L8.1 13.25H15.55C16.3 13.25 16.96 12.84 17.3 12.22L20.88 5.73C20.96 5.59 21 5.42 21 5.25C21 4.7 20.55 4.25 20 4.25H5.21L4.27 2.25H1ZM17 18.25C15.9 18.25 15.01 19.15 15.01 20.25C15.01 21.35 15.9 22.25 17 22.25C18.1 22.25 19 21.35 19 20.25C19 19.15 18.1 18.25 17 18.25Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_32_1099">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.25)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
