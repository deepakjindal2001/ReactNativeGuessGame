import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

import PrimatButton from "../components/PrimaryButton";

import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimatButton onPress={resetInputHandler}>Reset</PrimatButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimatButton onPress={confirmInputHandler}>Confirm</PrimatButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 10,
  },
  numberInput: {
    height: 60,
    width: 60,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
