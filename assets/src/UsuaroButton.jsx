import React from "react";
import { useNavigation } from "@react-navigation/native";
function iralusuario() {
  const navigation = useNavigation();
  const iralusuario = () => {
    navigation.navigate("./");
  };
  return <Button title="usuario" onPress={iralusuario} />;
}
const styles = StyleSheet.create({
  RetrocederButton: {
    backgroundColor: "white",
    color: "purpura",
    borderRadius: 5,
    margin: 50,
  },
});
export default iralusuario;
