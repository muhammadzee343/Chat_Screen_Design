import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function SingleTickIcon(props) {
  return (
    <Svg viewBox="0 0 515.556 515.556" height={10} width={10}>
      <Path
        fill={props.iconColor}
        d="M0 274.226l176.549 176.886L515.556 112.44l-48.67-47.997-290.337 290L47.996 225.891z"
      />
    </Svg>
  );
}
