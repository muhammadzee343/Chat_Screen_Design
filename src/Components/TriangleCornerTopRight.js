import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TriangleCorner from './TriangleCorner';

export default function TriangleCornerTopRight() {
  return (
    <View>
      <TriangleCorner style={styles.triangleCornerTopRight} />
    </View>
  );
}

const styles = StyleSheet.create({
  triangleCornerTopRight: {
    transform: [{rotate: '90deg'}],
  },
});
