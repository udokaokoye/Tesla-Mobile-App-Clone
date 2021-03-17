import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const StyledButton = (props) => {

    const type = props.type;

    const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6'
    const color = type === 'primary' ? 'white' : 'black'
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor}]} onPress={() => props.onPress()}>
                <Text style={[styles.text, {color}]}>{props.content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
