import React from 'react';
import {
  Defs,
  LinearGradient,
  Path,
  Stop,
  Svg,
  type SvgProps,
} from 'react-native-svg';

export function GradientCheckmarkCircle({ ...props }: SvgProps) {
  return (
    <Svg width="72" height="72" viewBox="0 0 72 72" fill="none" {...props}>
      <Path
        d="M34.5 3C41.1284 3 47.3202 4.86927 52.577 8.10941L48.516 12.6789C44.3773 10.3368 39.5948 9 34.5 9C18.7599 9 6 21.7599 6 37.5C6 53.2401 18.7599 66 34.5 66C50.2401 66 63 53.2401 63 37.5C63 34.6608 62.5848 31.9185 61.8119 29.3307L66.3522 24.2219C68.058 28.309 69 32.7945 69 37.5C69 56.5538 53.5538 72 34.5 72C15.4462 72 0 56.5538 0 37.5C0 18.4462 15.4462 3 34.5 3Z"
        fill="url(#paint0_linear_40_2423)"
      />
      <Path
        d="M71.0786 9.16078C72.4172 7.63265 72.2813 5.29291 70.7751 3.93483C69.2689 2.57675 66.9627 2.7146 65.6241 4.24273L35.7473 38.3494L24.3782 25.3465C23.041 23.8171 20.7349 23.6771 19.2274 25.0337C17.72 26.3904 17.582 28.73 18.9192 30.2594L35.7422 49.5L71.0786 9.16078Z"
        fill="url(#paint1_linear_40_2423)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_40_2423"
          x1="72"
          y1="64"
          x2="5.5"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#28CE9C" />
          <Stop offset="1" stopColor="#6AC9FF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_40_2423"
          x1="72"
          y1="64"
          x2="5.5"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#28CE9C" />
          <Stop offset="1" stopColor="#6AC9FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
