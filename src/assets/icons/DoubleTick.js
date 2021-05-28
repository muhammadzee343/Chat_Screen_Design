import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function DoubleTickIcon(props) {
  return (
    <Svg viewBox="0 0 594.149 594.149" height={12} width={12}>
      <Path
        fill={props.iconColor}
        d="M448.8 161.925l-35.7-35.7-160.65 160.65 35.7 35.7 160.65-160.65zm107.099-35.7l-267.75 270.3-107.1-107.1-35.7 35.7 142.8 142.8 306-306-38.25-35.7zM0 325.125l142.8 142.8 35.7-35.7-142.8-142.8-35.7 35.7z"
      />
    </Svg>
  );
}
