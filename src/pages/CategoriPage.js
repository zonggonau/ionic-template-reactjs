import React, { useState } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonPage, IonIcon, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText } from '@ionic/react';
import TabHeader from '../components/TabHeader';
import { grid } from 'ionicons/icons';

const CategoriPage = () => {
    const categories = [
        { name: 'Electronics', icon: 'laptop' },
        { name: 'Clothing', icon: 'shirt' },
        { name: 'Home', icon: 'home' },
        { name: 'Grocery', icon: 'basket' },
        { name: 'Fashion', icon: 'fashion' },
        { name: 'Sports', icon: 'football' },
        { name: 'Books', icon: 'book' },
        { name: 'Movies', icon: 'film' },
        { name: 'Music', icon: 'musical-notes' },
        { name: 'Toys', icon: 'game-controller-b' },
        { name: 'Kids', icon: 'child' },
        // etc
    ];
    return (
        <IonPage >
            <TabHeader title={'Category Page'} />
            <IonContent className='ion-padding'>
                <h1>CATEGORY PAGE</h1>
            </IonContent>
        </IonPage >
    );
}

export default CategoriPage