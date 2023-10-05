import React from "react";
import { useNavigation } from "@react-navigation/native";
function iralusuario() {
  const navigation = useNavigation();
  const iralusuario = () => {
    navigation.navigate("./");
  };
  return <Button title="usuario" onPress={iralusuario} />;
}
