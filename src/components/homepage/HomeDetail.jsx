import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonText, IonRow, IonGrid, IonCol, IonIcon, IonNavLink, IonImg, IonPage } from '@ionic/react'
import React, { useEffect } from 'react'
import { grid } from 'ionicons/icons';
import { getProductPricelist } from '../../slice/pricelistSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeDetail({ location }) {
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // const sortedProducts = pricelist?.map(a => a).sort((a, b) => a.product_price - b.product_price)
    console.log(location);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton slot="stop"></IonBackButton>
                    </IonButtons>
                    <IonTitle class='capitalize'>TopUp { }</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid className='ion-padding'>

                    <IonRow>
                        {/* {
                            sortedProducts?.map((item, index) => (
                                <IonCol size='6' key={index} className='text-center'>
                                    <IonNavLink routerDirection='forward' name="KRISTOVEDUS ZONGGONAU">
                                        <div>
                                            <div>
                                                <IonImg src={item.icon_url} />
                                            </div>
                                            <div>
                                                <IonText color='white' className='text-xs'>{item.product_description}</IonText><br />
                                                <IonText color='white' className='text-xs' class=''>{formatNumber(item.product_nominal)}</IonText>


                                            </div>
                                        </div>
                                    </IonNavLink>
                                </IonCol>
                            ))
                        } */}
                    </IonRow>
                </IonGrid>
            </IonContent >
        </IonPage>

    )
}
