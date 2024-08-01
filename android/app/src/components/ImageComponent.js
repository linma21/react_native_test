import React from 'react'
import { Image, View, StyleSheet } from 'react-native';

const ImageComponent = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/ppoppi_in_my_house.png')} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    image: {
        width: 150,
        height: 150,
    },
});

export default ImageComponent