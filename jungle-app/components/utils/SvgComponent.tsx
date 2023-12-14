import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface SvgComponentProps {
  svgPath: string;
  fill: string;
  width?: number;
  height?: number;
}

const SvgComponent: React.FC<SvgComponentProps> = ({ svgPath, fill, width, height }) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox="0 0 34 31">
        <Path d={svgPath} fill={fill}/>
      </Svg>
    </View>
  );
}

export default SvgComponent;
