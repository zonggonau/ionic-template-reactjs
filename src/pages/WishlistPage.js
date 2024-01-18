import React from 'react';
import { IonContent, IonPage, IonButton, IonNavLink } from '@ionic/react';
import TabHeader from '../components/TabHeader';


const WishlistPage = () => (
    <IonPage>
        <TabHeader title={'Wishlist Page'} />
        <IonContent class='ion-padding'>
            <h1>WISHLIST PAGE</h1>

        </IonContent>
    </IonPage>
);

export default WishlistPage