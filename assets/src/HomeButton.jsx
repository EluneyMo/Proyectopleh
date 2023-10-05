import React from "react";
import { useNavigation } from "@react-navigation/native";
function iralhome() {
  const navigation = useNavigation();
  const iralhome = () => {
    navigation.navigate("./Home");
  };
  return <Button title="home" onPress={iralhome} />;
}
const styles = StyleSheet.create({
  RetrocederButton: {
    backgroundColor: "white",
    color: "purpura",
    borderRadius: 5,
    margin: 50,
  },
});

export default iralhome;
