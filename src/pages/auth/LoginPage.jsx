import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonText,
    IonCardHeader
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAuth } from '../../slice/loginSlice';
import { useIonRouter } from '@ionic/react';

const LoginPage = () => {
    const navigate = useIonRouter();
    const [email, setEmail] = useState('cristoperzonggonau@gmail.com');
    const [password, setPassword] = useState('Z0ngg0n4U');

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'cristoperzonggonau@gmail.com' && password === 'Z0ngg0n4U') {
            const credentials = {
                isAuthenticated: true,
                user: {
                    name: "Kristovedus Zonggonau",
                    email: "cristoperzonggonau@gmail.com"
                }
            }
            dispatch(LoginAuth(credentials));
            // bring redirect to home page 
            return navigate.push('/app/home');
        }
        else {
            alert('Invalid email or password');
        }
    }

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonCardHeader>
                    <IonTitle className=''>Login</IonTitle>
                </IonCardHeader>
                <form onSubmit={handleLogin}>
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput
                            type="email"
                            value={email}
                            onIonChange={e => setEmail(e.detail.value)}
                        ></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput
                            type="password"
                            value={password}
                            onIonChange={e => setPassword(e.detail.value)}
                        ></IonInput>
                    </IonItem>

                    <IonButton expand="block" type='submit'>
                        Login
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;
