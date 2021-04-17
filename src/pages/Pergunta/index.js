import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';

import Speech from '../../components/Speech';

export default function BoasVindas() {
  const headerHeight = useHeaderHeight();

  return (
    <View style={{...styles.container, marginTop: headerHeight}}>
      <View style={styles.speechContainer}>
        <Speech />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 16,
  },
  speechContainer: {
    marginBottom: 64,
  },
});
