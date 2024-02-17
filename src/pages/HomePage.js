import React, { Suspense, useEffect } from 'react';
import useSWR from 'swr';
import { IonTitle, IonMenuButton, IonButtons, IonToolbar, IonImg, IonButton, IonHeader, IonText, IonContent, IonPage, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonGrid, IonRow, IonCol, IonNav } from '@ionic/react';
import { Swiper, SwiperSlide } from "swiper/react"
import SidebarPage from './SidebarPage';
import 'swiper/css'
import HomeType from '../components/homepage/HomeType';
import HomeCarousel from '../components/homepage/HomeCarousel';


// const getProduct = ([url, token]) => fetch(url, token).then(res => res.json())

const HomePage = () => {

    const qs = require('qs')
    const query = qs.stringify({
        sort: ['title:asc']
    }, {
        encodeValuesOnly: true
    })

    const { data, error, isLoading } = useSWR(`/api/products?${query}&populate=*`);

    if (error) return <p>Error</p>

    if (isLoading) return <p>Loading</p>



    return (
        <>
            {/* <SidebarPage /> */}
            <IonPage id='main-content'>
                {/* <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>HOME PAGE</IonTitle>
                    </IonToolbar>
                </IonHeader> */}
                <IonContent className='ion-padding'>
                    <HomeCarousel />
                    <HomeType />
                    <div>

                        {/* <IonNav root={() => <HomeType />}></IonNav> */}
                    </div>
                    {/* <HomeCategory /> */}
                    {/* {data.data?.map((product) => (
                        <IonCard>
                            <IonImg src={`${process.env.REACT_APP_HOST_API}${product.attributes.thumnail.data.attributes.url} `} className="card-img-top" alt={product.attributes.title} />
                            <IonCardHeader>
                                <IonCardTitle>{product.attributes.title}</IonCardTitle>
                                <IonCardSubtitle>{product.attributes.price}</IonCardSubtitle>
                            </IonCardHeader>

                            <IonCardContent>{product.attributes.description[0].children[0].text}</IonCardContent>
                        </IonCard>
                    ))
                    } */}


                </IonContent >

            </IonPage >
        </>
    );
}
export default HomePage