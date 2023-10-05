import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function RetrocederButton() {
  const navigation = useNavigation();
  const retrocederEnLaApp = () => {
    navigation.goBack();
  };
  return <Button title="Retroceder" onPress={retrocederEnLaApp} />;
}

const styles = StyleSheet.create({
  RetrocederButton: {
    backgroundColor: "white",
    color: "purpura",
    borderRadius: 5,
    margin: 50,
  },
});

export default RetrocederButton;
