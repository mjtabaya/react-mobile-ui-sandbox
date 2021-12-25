import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar, Button, Text, Card, Title, Paragraph } from 'react-native-paper';

const DashboardScreen = () => {
  const state = {
    event: {
      name: 'Test',
      date: 'Dec 6, 2022',
    },
  };
  const onSuccess = (params) => {
    console.log(params);
  };
  const navigate = (params) => {
    console.log(params);
  };
  const startScan = () => {
    console.log(params);
  };
  const signOut = () => {
    console.log('wee');
  };
  const setScan = (params) => {
    console.log(params);
  };
  const scan = false;
  return (
    <View style={styles.container}>
      <Appbar style={styles.top}>
        <Appbar.Action icon="subdirectory-arrow-left" onPress={() => navigate(-1)} />
        <Appbar.Action icon="logout" onPress={signOut} />
      </Appbar>
      <View>
        <Card>
          <Card.Content>
            <Title>{state.event.name}</Title>
            <Paragraph>{state.event.date}</Paragraph>
            {!scan && (
              <Button mode="contained" style={styles.input} onPress={startScan}>
                Start Scan
              </Button>
            )}
            {scan && (
              <Button mode="contained" style={styles.input} onPress={() => setScan(false)}>
                Stop Scan
              </Button>
            )}
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  input: {
    height: 40,
    margin: 40,
    justifyContent: 'center',
  },
  top: {
    left: 0,
    right: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  right: {
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
  },
});

export default DashboardScreen;
