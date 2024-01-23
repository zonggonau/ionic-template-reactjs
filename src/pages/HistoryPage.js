import React from 'react';
import { IonButton, IonContent, IonPage, useIonRouter } from '@ionic/react';
import TabHeader from '../components/TabHeader';
import { useDispatch } from 'react-redux';
import { Logout } from '../slice/loginSlice';

const HistoryPage = () => {
    const dispatch = useDispatch();
    const navigation = useIonRouter()
    const handleLogout = () => {
        const credentials = {
            isAuthenticated: false,
            user: {
                name: "Kristovedus Zonggonau",
                email: "cristoperzonggonau@gmail.com"
            }
        }
        dispatch(Logout(credentials))
        navigation.push('/login')
    }
    return (
        <IonPage>
            <TabHeader title={'History Page'} />
            <IonContent>
                <IonButton onClick={handleLogout} expand='full'>Logout</IonButton>
            </IonContent>
        </IonPage>
    );
}

export default HistoryPage 