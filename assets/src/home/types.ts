// types.ts
export type RootStackParamList = {
    Home: { correoUsuario: string  };
    Panico: undefined;
    Login:undefined;
    // ... otras pantallas según tus necesidades
  };
  export interface LoginFormProps {
    onAuthenticate: (email: string, password: string) => Promise<void>;
    buttonText: string;
    RegisterUser: (email: string, password: string, registrationData: RegistrationData) => Promise<void>;
    
    // Otras propiedades según las necesidades de tu formulario de inicio de sesión
  }
 
  // types.ts
export interface RegistrationData {
  nombre: string;
  dni: string;
  uid: string;
}


  
  
  
  