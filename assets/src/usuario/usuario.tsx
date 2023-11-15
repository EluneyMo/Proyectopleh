import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface MyFormProps {}

const MyForm: React.FC<MyFormProps> = () => {
    const [imputNombre, setNombre]  = useState<string>('');
    const [imputSurname, setSurname] = useState<string>('');
    const [imputNumeroIdentificacion, setNumeroIdentificacion] = useState<string>('');
}