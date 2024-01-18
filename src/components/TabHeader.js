import React from 'react'
import { IonHeader, IonToolbar, IonTitle, IonText, IonButtons, IonButton, IonBackButton } from '@ionic/react'
import { useSelector } from 'react-redux'
export default function TabHeader({ title }) {
    const cartItem = useSelector(state => state.cart.items)
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                    {cartItem.length > 0 && <IonText color="primary">Cart: {cartItem.length}</IonText>}
                </IonToolbar>
            </IonHeader>
        </>
    )
}
