// Por ejemplo, en AppNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './assets/src/home/Home';
import Panicbutton from './assets/src/panico/Panicbutton';
import Login from './assets/src/login/login';
import CajaTipos from './assets/src/cuestionario/cajapreguntas';
import RegistroForm from './assets/src/login/register';
import { LoginFormProps } from './assets/src/home/types';
const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Registro'>{(props: LoginFormProps) => <RegistroForm {...props} />}</Stack.Screen> 
        <Stack.Screen name="Panico" component={Panicbutton} />
        <Stack.Screen name='Preguntas' component={CajaTipos}/>
        {/* ... otras pantallas según tus necesidades */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

