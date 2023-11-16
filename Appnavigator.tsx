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
import cambiocon from './assets/src/login/cambiocon';
import MyForm from './assets/src/usuario/usuario';
import Institucional from './assets/src/cuestionario/institucional';
import Mediatica from './assets/src/cuestionario/mediatica';
import Sexual from './assets/src/cuestionario/vsexual';
import Femicidio from './assets/src/cuestionario/femicidios';
import Acoso from './assets/src/cuestionario/acoso';
import Laboral from './assets/src/cuestionario/Vlaboral';
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
        <Stack.Screen name="ChangePassword" component={cambiocon} />
        <Stack.Screen name ="Usuario" component={MyForm}/>
        <Stack.Screen name ="Institucional" component={Institucional} />
        <Stack.Screen name ="Acoso" component={Acoso} />
        <Stack.Screen name ="Mediatica" component={Mediatica} />
        <Stack.Screen name ="Femicidios" component={Femicidio} />
        <Stack.Screen name ="Sexual" component={Sexual} />
        <Stack.Screen name ="Laboral" component={Laboral} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

