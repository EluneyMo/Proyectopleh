// types.ts
export type RootStackParamList = {
    PLEH: { correoUsuario: string  };
    Panico: undefined;
    Login:undefined;
    Preguntas:undefined;
    Tipos:undefined;
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


  
  
  
  