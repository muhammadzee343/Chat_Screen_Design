import React, {PureComponent} from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import DoubleTickIcon from '../assets/icons/DoubleTick';
import TriangleCorner from '../Components/TriangleCorner';
import TriangleCornerTopLeft from '../Components/TriangleCornerTopRight';
import styles from './style';

class ChatScreen extends PureComponent {
  render() {
    const VIEWS_COLOR = 'white';
    const TEXT_COLOR = 'black';
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.bgImgStyle}
          source={require('../assets/images/whatsappBG.jpeg')}>
          <View style={styles.leftMsgBoxContainer}>
            <TriangleCornerTopLeft />
            <View style={styles.leftMsgBoxStyle}>
              <View style={styles.msgTextContainer}>
                <Text>
                  <Text style={styles.msgStyle}>
                    {' '}
                    sdfjk sfklj fskjf sfhj sfjjsf sjfhsd jfhs jfh sdhfds sdjkf
                    jksdh sdhjf hjksdj dsfj as asd adsdf dfjh sjfh sdfjh sdfj
                    hjhfsd jhfjsdfg{' '}
                  </Text>
                  <Text style={{color: 'transparent'}}>AAAAAAA</Text>
                </Text>
              </View>

              <View style={styles.dateContainer}>
                <View style={styles.dateInnerContainer}>
                  <Text style={styles.dateTextStyle}>12:34 AM </Text>
                  <DoubleTickIcon iconColor="blue" />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.rightMsgBoxContainer}>
            <View style={styles.rightMsgBoxStyle}>
              <View style={styles.msgTextContainer}>
                <Text>
                  <Text style={styles.msgStyle}>
                    {' '}
                    sdfjk sfklj fskjf sfhj sfjjsf sjfhsd jfhs jfh sdhfds{' '}
                  </Text>
                  <Text style={{color: 'transparent'}}>AAAAAAA</Text>
                </Text>
              </View>

              <View style={styles.dateContainer}>
                <View style={styles.dateInnerContainer}>
                  <Text style={styles.dateTextStyle}>12:34 AM </Text>
                  <DoubleTickIcon iconColor="blue" />
                </View>
              </View>
            </View>
            <TriangleCorner />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default ChatScreen;
