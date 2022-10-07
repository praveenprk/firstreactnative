import React from 'react'
import { Image, StyleSheet } from 'react-native'

const ShowImage = () => {

  // In React Native, show images =, it's imperative to use Stylesheet
  // in order to make it visible

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

  return (
    <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png"
    }}/>
  )
}

export default ShowImage