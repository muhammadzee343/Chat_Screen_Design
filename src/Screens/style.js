import React from 'react';
import {StyleSheet} from 'react-native';

const VIEWS_COLOR = 'white';
const TEXT_COLOR = 'black';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImgStyle: {
    width: '100%',
    height: '100%',
  },
  leftMsgBoxContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  leftMsgBoxStyle: {
    width: '70%',
    minHeight: 40,
    backgroundColor: VIEWS_COLOR,
    borderColor: 'transparent',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  msgTextContainer: {
    width: '100%',
    minHeight: 40,
    padding: 5,
  },
  msgStyle: {
    color: TEXT_COLOR,
  },
  dateContainer: {
    height: 0,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  dateInnerContainer: {
    height: 24,
    width: 80,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  dateTextStyle: {
    color: 'gray',
    fontSize: 11,
  },
  rightMsgBoxContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'flex-end',
  },
  rightMsgBoxStyle: {
    width: '70%',
    minHeight: 40,
    backgroundColor: VIEWS_COLOR,
    borderColor: 'transparent',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default styles;
