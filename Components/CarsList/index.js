import React from 'react'
import { View, FlatList, Dimensions, StatusBar } from 'react-native';
import CarItem from '../carItems/index'
import styles from './styles';
import cars from './cars'
const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList data={cars} renderItem={({item}) => (
                <CarItem key={Math} name={item.name} tagline={item.tagline} taglineCTA={item.taglineCTA} image={item.image} />
            )}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'} decelerationRate={'normal'} snapToInterval={Dimensions.get('window').height + StatusBar.currentHeight}
            />
        </View>
    )
}

export default CarsList
