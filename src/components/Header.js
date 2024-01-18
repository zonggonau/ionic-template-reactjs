import React from 'react'
import { IonHeader, IonToolbar, IonTitle, IonText, IonButtons, IonButton, IonBackButton } from '@ionic/react'
import { arrowBack } from 'ionicons/icons'
import { useSelector } from 'react-redux'
export default function Header({ title }) {
    const cartItem = useSelector(state => state.cart.items)
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton color={'danger'} icon={arrowBack}></IonBackButton>
                    </IonButtons>
                    <IonTitle>{title}</IonTitle>
                    {cartItem.length > 0 && <IonText color="primary">Cart: {cartItem.length}</IonText>}
                </IonToolbar>
            </IonHeader>
        </>
    )
}
