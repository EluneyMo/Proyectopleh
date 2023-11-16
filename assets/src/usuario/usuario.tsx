import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../../../firebase/firebase';
import React, { useState } from 'react';
import { DocumentData, DocumentReference, getFirestore, doc, setDoc, getDoc, collection } from 'firebase/firestore';
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
            <TextInput
            placeholder="imputEmail"
            value={imputEmail}
            onChangeText={(Text) => setEmail(Text)}
            />
            <TextInput
            placeholder="imputPhone"
            value={imputPhone}
            onChangeText={(Text) => setPhone(Text)}
            />
            <TextInput
            placeholder="imputDireccion"
            value={imputDireccion}
            onChangeText={(Text) => setDireccion(Text)}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};


export default MyForm;