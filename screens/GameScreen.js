import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
        {/* +- */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, marginTop: 50, padding: 12 },
});

export default GameScreen;
