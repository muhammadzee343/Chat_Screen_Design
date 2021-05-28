import React, {PureComponent} from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import DoubleTick from './src/assets/icons/DoubleTick';
import TriangleCornerTopLeft from './src/Components/TriangleCornerTopRight'
import TriangleCorner from './src/Components/TriangleCorner'
import ChatScreen from './src/Screens/ChatScreen';

class App extends PureComponent {
  render() {
    
    return (
      <ChatScreen/>
    );
  }
}

export default App;
