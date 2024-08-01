import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

const CtnComponent = ({ content, style }) => {

  const [number, setNumber] = useState(0);

  return (
    <View style={[styles.container, style]}>
      {content}
      <Button mode="contained" onPress={() => setNumber(number + 1 )}>
            Plus
      </Button>
      <Button mode="contained" onPress={() => setNumber(number - 1 )}>
            Minus
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
});

export default CtnComponent;

