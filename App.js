import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './screens/Home/Form';
import Home from './screens/Home/Home';
import ShowImage from './screens/Home/ShowImage';

export default function App() {
  return (
    <View style={styles.container}>
      <ShowImage/>
      <Home />
      <Form/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
