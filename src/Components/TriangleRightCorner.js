import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TriangleRightCorner(props) {
  return <View style={[styles.triangleRightCorner, props.style]} />;
}

const styles = StyleSheet.create({
  triangleRightCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    // borderStyle: 'solid',
    borderRightWidth: 15,
    borderTopWidth: 15,
    borderRightColor: 'transparent',
    borderTopColor: 'white',
  },
});
