import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>
                Game Over!
            </Text>
            <Text>
                Number of rounds it took: {props.numOfRounds}
            </Text>
            <Text>
                Correct Number was: {props.userNumber}
            </Text>
            <Button title="New Game" onPress={props.startNewGame}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default GameOverScreen