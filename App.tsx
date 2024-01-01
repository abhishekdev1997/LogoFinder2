/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import screens from './src/screens';
import styles from './src/styles';
import { ErrorBoundary } from './src/components';


function App(): React.JSX.Element {

  return (
    <ErrorBoundary>
      <SafeAreaView style={styles.main}>
        <screens.Home.HomeScreen />
      </SafeAreaView>
    </ErrorBoundary>
  );
}

export default App;
