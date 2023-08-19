import React from 'react';
import { SafeAreaView, } from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home></Home>
    </SafeAreaView>
  )
};

export default App