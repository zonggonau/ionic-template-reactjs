import React, { useEffect, useState } from 'react';
import { IonCard, IonTitle, IonBadge, IonCardContent, IonMenuButton, IonList, IonButtons, IonToolbar, IonHeader, IonCardHeader, IonButton, IonCardTitle, IonImg, IonContent, IonPage, IonNavLink, IonRouterOutlet, IonItem, useIonRouter, IonMenu, IonToggle } from '@ionic/react';
import { cart, menu, search } from 'ionicons/icons';
import { fetchProductsAsync } from '../slice/productsSlice';
import { add } from '../slice/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Products = () => {
    const [themeToggle, setThemeToggle] = useState(false);
    const { data, status } = useSelector(state => state.products);

    const dispatch = useDispatch();
    useEffect(() => {

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        initializeDarkTheme(prefersDark.matches);
        prefersDark.addEventListener('change', (e) => {
            initializeDarkTheme(e.matches);
        });

        dispatch(fetchProductsAsync());
    }, [])

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'rejected') {
        return <div>Failed to load</div>
    }


    const toggleChange = (e) => {
        toggleDarkTheme(e.detail.checked);
    }

    const toggleDarkTheme = (darkAdd) => {
        document.body.classList.toggle('dark', darkAdd)
    }

    const initializeDarkTheme = (isDark) => {
        setThemeToggle(isDark);
        toggleDarkTheme(isDark);
    }



    return (
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar color="tertiary">
                        <IonTitle>Profile</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonList inset={true}>
                        <IonItem>
                            <IonToggle checked={themeToggle} onIonChange={toggleChange} justify="space-between">
                                Dark Mode
                            </IonToggle>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
            <IonPage id='main-content'>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                            <IonButton>

                            </IonButton>
                        </IonButtons>
                        <IonTitle>Products</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {
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
                    }

                </IonContent >

            </IonPage >
        </>
    );
}
export default Products;