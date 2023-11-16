// Por ejemplo, en AppNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './assets/src/home/Home';
import Panicbutton from './assets/src/panico/Panicbutton';
import Login from './assets/src/login/login';
import CajaTipos from './assets/src/cuestionario/cajapreguntas';
import RegistroForm from './assets/src/login/register';
import { LoginFormProps } from './assets/src/home/types';
import Tipos from './assets/src/cuestionario/cajatipos';
import enviargmai from "./assets/src/login/gmailcontra"
import Expertos from './assets/src/expertos/expertos';
const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="PLEH" component={Home} />
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Registro'>{(props: LoginFormProps) => <RegistroForm {...props} />}</Stack.Screen> 
        <Stack.Screen name="Panico" component={Panicbutton} />
        <Stack.Screen name='Preguntas' component={CajaTipos}/>
        <Stack.Screen name='Tipos' component={Tipos}/>
        <Stack.Screen name="Cambio de contraseña" component={enviargmai} />
        <Stack.Screen name="Expertos" component={Expertos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

