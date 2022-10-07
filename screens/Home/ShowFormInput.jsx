import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ShowFormInput = (props) => {
  return (
    <View><Text style={showInput.center}>{props.formVal}</Text></View>
  )
}

const showInput = StyleSheet.create({
    center: {
        textAlign: "center"
    }
});

export default ShowFormInput