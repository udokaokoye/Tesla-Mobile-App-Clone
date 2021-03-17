import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles';
import StyledButton from '../StyledButton';
const Caritem = (props) => {
    return (
        <View style={styles.carContainer}>

        <ImageBackground source={props.image} style={styles.image} />

        <View style={styles.titles}>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.subTitle}>{props.tagline}{" "}<Text style={styles.taglineCTA}>{props.taglineCTA}</Text></Text>
          
        </View>


        <View style={styles.buttonContainer}>
        <StyledButton type='primary' content={"Custom Order"} onPress={() => alert("Custom Order was pressed")} />
        <StyledButton type='Hello' content={"Existing Inventory"} onPress={() => alert("Existing Inventory was pressed")} />
        </View>

      </View>
    )
}

export default Caritem
