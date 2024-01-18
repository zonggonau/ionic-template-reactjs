import React, { useEffect, Suspense } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router'
import { getProductByID } from '../slice/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { IonContent, IonSkeletonText, IonImg, IonList, IonPage, IonListHeader, IonItem, IonThumbnail, IonIcon, IonLabel } from '@ionic/react';
import { cart } from 'ionicons/icons'

export default function Example() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { product, status } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProductByID(id))
    }, [])


    function Loading() {
        return (
            <IonList>
                <IonListHeader>
                    <IonSkeletonText animated={true} style={{ width: '80px' }}></IonSkeletonText>
                </IonListHeader>
                <IonItem>
                    <IonThumbnail slot="start">
                        <IonSkeletonText animated={true}></IonSkeletonText>
                    </IonThumbnail>
                    <IonLabel>
                        <h3>
                            <IonSkeletonText animated={true} style={{ width: '80%' }}></IonSkeletonText>
                        </h3>
                        <p>
                            <IonSkeletonText animated={true} style={{ width: '60%' }}></IonSkeletonText>
                        </p>
                        <p>
                            <IonSkeletonText animated={true} style={{ width: '30%' }}></IonSkeletonText>
                        </p>
                    </IonLabel>
                </IonItem>
            </IonList>
        )
    }


    return (
        <IonPage className='ion-padding'>
            <Header title={'Product Details'} />
            <IonContent>
                <h1>Detail Prduct</h1>

                <img src={product.thumbnail} alt={product.title} />

                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                {/* <p>Rating: {product.rating.rate} ({product.rating.count})</p> */}
            </IonContent>
        </IonPage>
    )
} 
