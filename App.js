import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './screens/Home/Button';
import Form from './screens/Home/Form';
import Home from './screens/Home/Home';
import Popup from './screens/Home/Popup';
import ShowImage from './screens/Home/ShowImage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Popup/> */}
      <ShowImage/>
      <Home />
      <Form/>
      <Button/>
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
