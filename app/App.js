/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import RootRouter from './components/RootRouter';

const App: () => React$Node = () => {
    return <RootRouter> </RootRouter>;
};

export default App;
