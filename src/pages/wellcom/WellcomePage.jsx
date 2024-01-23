import { IonButton, IonCol, IonContent, IonImg, IonPage, IonRow, IonText } from '@ionic/react'
import React from 'react'

export default function WelcomePage() {
    return (
        <IonPage>
            <IonContent class='ion-padding'>
                <IonRow class='bg-red-300 bor rounded-3xl'>
                    <IonCol>
                        <IonImg src='https://cdni.iconscout.com/illustration/premium/thumb/girl-shopping-for-purse-on-ecommerce-app-8020158-6437464.png?f=webp' />
                    </IonCol>
                </IonRow>
                <IonRow class='text-center pt-8'>
                    <IonCol>
                        <IonText class='text-2xl font-extrabold'>Wellcome</IonText>
                    </IonCol>
                </IonRow>
                <IonRow class='text-center pt-5'>
                    <IonCol>
                        <IonText>Selamat datang di aplikasi KasJadi, Jelajahi dunia Menjadi Gampang dan Simple dengan Sekali Klik. KasJadi </IonText>
                    </IonCol>
                </IonRow>
                <IonRow class='text-center pt-5'>
                    <IonCol>
                        <IonButton expand='full' routerLink='/login'>Login</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton expand='full' routerLink='/register'>Register</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}
