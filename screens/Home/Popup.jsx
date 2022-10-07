import React from 'react'
import { Modal, Text, StyleSheet } from 'react-native'

const Popup = () => {

  return (
    <Modal style={styles.container}>
      <Text style={styles.centeredText}>This is a modal also known as popup sometimes by noob!</Text>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: "red"
  },
  centeredText: {
    textAlign: "center"
  }
})

export default Popup