import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'

import Store from './src/store'
import {Header} from './src/components'

export default function App() {
  return (
    <Provider store={Store}>
<View style={styles.container}>
  <Header/>
</View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:"#000"
  },
})