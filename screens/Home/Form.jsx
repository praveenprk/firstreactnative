import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import ShowFormInput from './ShowFormInput'

const Form = () => {

    const [formVal, setFormVal] = useState("")

  return (
    <View>
    <TextInput
    style={FormStyle.form}
    placeholder="This <TextInput> just like <input type='text'>"
    
    // In React Native, instead of onChange, use onChangeText,
    // you get entered value in the arguments and use that instead
    onChangeText={(newText) => setFormVal(newText)}
    
    value={formVal} />
    {/* This is how you break or give new line or use <br> in the React Native */}
    <Text>{"\n"}</Text>

    {/* Props work the same way as in ReactJS */}
    <ShowFormInput formVal={formVal}/>
    </View>
    
  )
}

const FormStyle = StyleSheet.create({
    form: {
        borderWidth: 1,
        width: "50%",
        padding: 10,
        borderColor: "black",
        top: 20,
        textAlign: "center"
    },
})

export default Form