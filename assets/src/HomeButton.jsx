import React from "react";
import { useNavigation } from "@react-navigation/native";
function iralhome() {
  const navigation = useNavigation();
  const iralhome = () => {
    navigation.navigate("./Home");
  };
  return <Button title="home" onPress={iralhome} />;
}

export default iralhome;
