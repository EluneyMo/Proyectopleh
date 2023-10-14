// types.ts
export type RootStackParamList = {
    Home: { correoUsuario: string  };
    Panico: undefined;
    Login:undefined;
    
  };
  export interface LoginFormProps {
    onAuthenticate: (email: string, password: string) => Promise<void>;
    buttonText: string;
    RegisterUser: (email: string, password: string, registrationData: RegistrationData) => Promise<void>;
    
   
  }
 
export interface RegistrationData {
  nombre: string;
  dni: string;
  uid: string;
}


  
  
  
  