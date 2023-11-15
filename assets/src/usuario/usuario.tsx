import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface MyFormProps {}

const MyForm: React.FC<MyFormProps> = () => {
    const [imputNombre, setNombre]  = useState<string>('');
    const [imputSurname, setSurname] = useState<string>('');
    const [imputNumeroIdentificacion, setNumeroIdentificacion] = useState<string>('');
    const [imputEmail, setEmail] = useState<string>('');
    const [imputPhone, setPhone] = useState<string>('');
    const [imputDireccion, setDireccion] = useState<string>('');

    const handleSubmit = () => {
        console.log('Submitted:', { imputNombre, imputSurname, imputNumeroIdentificacion, imputEmail, imputPhone, imputDireccion });
    };

    return (
        <View>
            <TextInput
            placeholder="imputNombre"
            value={imputNombre}
            onChangeText={(Text) => setNombre(Text)}
            />
            <TextInput
            placeholder="imputSurname"
            value={imputSurname}
            onChangeText={(Text) => setSurname(Text)}
            />
            <TextInput
            placeholder="imputNumeroIdentificacion"
            value={imputNumeroIdentificacion}
            onChangeText={(Text) => setNumeroIdentificacion(Text)}
            />
        </View>
    )
}