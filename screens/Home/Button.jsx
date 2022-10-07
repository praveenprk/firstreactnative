import React, { useEffect, useState } from 'react'
import { Text, Pressable } from 'react-native'
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Button = () => {
    const [pressed, setPressed] = useState(false)
    
    /* useEffect(()=>{

    },[show]);
 */
  return (
    <>
        <Pressable onPress={()=>{
            if(pressed) setPressed(false)
            else setPressed(true)
        }
            }>
            <Text>
                {
                    !pressed ? <Text>Press this Button!</Text> : <Text>Button Pressed, Press again!</Text>
                }
            </Text>
        </Pressable>
        <Text>{"\n"}</Text>
    </>
  )
}

export default Button