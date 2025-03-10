import { BlurView } from 'expo-blur';
import React from 'react';
import { View, type ViewProps } from 'react-native';
import {
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Svg,
  type SvgProps,
} from 'react-native-svg';

interface BlueBlurBgProps extends ViewProps {
  children: React.ReactNode;
}

const BlueBlurBg: React.FC<BlueBlurBgProps> = ({
  children,
  className,
  ...props
}) => {
  const MemoizedBlueBlurSVG = React.memo(BlueBlurSVG);

  return (
    <View className="absolute inset-0" {...props}>
      {/* Blue Light Source */}
      <View className="opacity-55">
        <MemoizedBlueBlurSVG />
      </View>
      <BlurView intensity={100} style={{ position: 'absolute', inset: 0 }} />

      {/* Blurred Overlay */}
      <View className={`absolute inset-0 ${className}`}>{children}</View>
    </View>
  );
};

const BlueBlurSVG = ({ ...props }: SvgProps) => {
  return (
    <Svg width="390" height="702" viewBox="0 0 390 702" fill="none" {...props}>
      <G opacity="0.4">
        <Rect
          y="446"
          width="245"
          height="256"
          rx="36"
          fill="url(#paint0_linear)"
        />
      </G>
      <G opacity="0.2">
        <Path
          d="M39.4559 177.026C42.3092 164.806 57.4774 160.477 66.3504 169.35L77.3855 180.386C78.4564 181.456 79.3698 182.674 80.0985 184.002L155.995 322.302C161.847 332.965 154.132 346 141.969 346H20.1664C9.86003 346 2.24203 336.398 4.58556 326.362L39.4559 177.026Z"
          fill="#6AC9FF"
        />
      </G>
      <G opacity="0.1">
        <Rect x="181" y="234" width="209" height="332" rx="86" fill="#FFCD48" />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="245"
          y1="672.319"
          x2="4.20355"
          y2="499.626"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#28CE9C" />
          <Stop offset="1" stopColor="#6AC9FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export { BlueBlurBg };
