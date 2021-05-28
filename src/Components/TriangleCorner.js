import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TriangleCorner(props) {
  return <View style={[styles.triangleCorner, props.style]} />;
}

const styles = StyleSheet.create({
  triangleCorner: {
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
