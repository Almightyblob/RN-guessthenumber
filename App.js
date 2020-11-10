import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {useFonts} from 'expo-font'
import {AppLoading} from 'expo'

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen  from "./screens/GameScreen"
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
const [userNumber, setUserNumber] = useState(0)
const [rounds, setRounds] = useState(0)
const [fontsLoaded] = useFonts({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
})

if(!fontsLoaded){
  return (
    <AppLoading 
        onError={(err) => {console.log(err)}}/>
  )
} 

const startGameHandler = selectedNumber => {
  setUserNumber(selectedNumber);
}

const gameOverHandler = numOfRounds => {
  setRounds(numOfRounds);
}

const startNewGameHandler = () => {
  setRounds(0)
  setUserNumber(null)
}

let content = <StartGameScreen onStartGame={startGameHandler}/>

if (userNumber && rounds <= 0) {
  content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
} else if (rounds > 0) {
  content = <GameOverScreen numOfRounds={rounds} userNumber={userNumber} startNewGame={startNewGameHandler}/>
}

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
