import React, { useEffect } from 'react';
import useSWR from 'swr';
import { IonTitle, IonMenuButton, IonButtons, IonToolbar, IonImg, IonButton, IonHeader, IonContent, IonPage, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import { fetchProductsAsync } from '../slice/productsSlice';
import { add } from '../slice/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import SidebarPage from './SidebarPage';


const getProduct = (url) => fetch(url).then(res => res.json())

const HomePage = () => {

    const HOST = "http://localhost:1337"
    // const { data, error, isLoading } = useSWR(HOST + '/api/products?populate=*', getProduct, { refreshInterval: 1000 });

    const { data, status } = useSelector(state => state.products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsAsync());
        console.log(data);
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
                    {data.map((product) => (
                        <IonCard>
                            {/* <IonImg src={`${HOST}${product.attributes.thumnail.data.attributes.url}`} className="card-img-top" alt={product.attributes.title} /> */}
                            <IonCardHeader>
                                <IonCardTitle>{product.attributes.title}</IonCardTitle>
                                <IonCardSubtitle>{product.attributes.price}</IonCardSubtitle>
                            </IonCardHeader>

                            <IonCardContent>{product.attributes.description[0].children[0].text}</IonCardContent>
                        </IonCard>
                    ))
                    }


                </IonContent >

            </IonPage >
        </>
    );
}
export default HomePage