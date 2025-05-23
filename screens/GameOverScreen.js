import { StyleSheet, Text, View } from "react-native";

function GameOverScreen() {
  return (
    <View style={styles.screen}>
      <Text>Game is over!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, marginTop: 50, padding: 12 },
});

export default GameOverScreen;
