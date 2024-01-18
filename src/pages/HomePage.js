import React, { useEffect } from 'react';
import { IonCard, IonTitle, IonCardContent, IonMenuButton, IonButtons, IonToolbar, IonHeader, IonCardHeader, IonButton, IonCardTitle, IonImg, IonContent, IonPage } from '@ionic/react';
import { fetchProductsAsync } from '../slice/productsSlice';
import { add } from '../slice/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import SidebarPage from './SidebarPage';

const HomePage = () => {

    const { data, status } = useSelector(state => state.products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [])

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'rejected') {
        return <div>Failed to load</div>
    }



    return (
        <>
            <SidebarPage />
            <IonPage id='main-content'>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>HOME PAGE</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className='ion-padding'>
                    <h1>HOME PAGE</h1>

                    {/* You can uncomment this to see the products */}
                    {/* {
                        data.map((item, index) => {

                            return (
                                <IonCard key={index} routerLink={`/product/${item.id}`} >
                                    <IonImg src={item.thumbnail} />

                                    <IonCardHeader>
                                        <IonCardTitle>{item.title}</IonCardTitle>
                                        <p>${item.price}</p>
                                    </IonCardHeader>

                                    <IonCardContent>
                                        {item.description}
                                        <p>Category: {item.category}</p>
                                        <p>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
                                    </IonCardContent>
                                    <IonButton expand="block" onClick={() => dispatch(add(item))}>
                                        Buy Now
                                    </IonButton>
                                </IonCard>

                            )
                        })
                    } */}

                </IonContent >

            </IonPage >
        </>
    );
}
export default HomePage