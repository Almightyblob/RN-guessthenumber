import React from 'react'
import {View, Text, Button, StyleSheet, Image} from 'react-native'
import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <TitleText>
                Game Over!
            </TitleText>
            <View style={styles.imageContainer}>
                <Image 
                    // source={require('../assets/success.png')} 
                    source={{uri: 'https://cosmosmagazine.com/wp-content/uploads/2020/02/190218-mount-full-1440x810.jpg'}}
                    style={styles.image}
                    resizeMode="cover"
                    />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{props.numOfRounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.
                </BodyText>
            </View>
            <MainButton onPress={props.startNewGame}>New Game</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: "hidden",
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    resultContainer: {
        width: '70%',
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
    }

})

export default GameOverScreen
