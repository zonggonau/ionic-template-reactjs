import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonText, IonRow, IonGrid, IonCol, IonIcon, IonRouterLink, IonImg, IonPage } from '@ionic/react'
import React, { useEffect } from 'react'
import { grid } from 'ionicons/icons';
import { getProductPricelist } from '../../slice/pricelistSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function HomePriceList({ match }) {
    const { pricelist } = useSelector(state => state.pricelist)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchPricelist = async () => {
            dispatch(await getProductPricelist(match.params))
        }
        fetchPricelist()
    }, [])
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const sortedProducts = pricelist?.map(a => a).sort((a, b) => a.product_price - b.product_price)
    console.log(pricelist);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton slot="stop"></IonBackButton>
                    </IonButtons>
                    <IonTitle class='capitalize'>TopUp {match.params.op}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid className='ion-padding'>

                    <IonRow>
                        {
                            sortedProducts?.map((item, index) => (
                                <IonCol size='6' key={index} className='text-center'>
                                    <IonRouterLink routerDirection={'forward'} state={{ item }} routerLink={`/products/${match.params.type}/${match.params.op}/${item.product_code}`} >
                                        <div>
                                            <div>
                                                <IonImg src={item.icon_url} />
                                            </div>
                                            <div>
                                                <IonText color='white' className='text-xs'>{item.product_description}</IonText><br />
                                                <IonText color='white' className='text-xs' class=''>{formatNumber(item.product_nominal)}</IonText>


                                            </div>
                                        </div>
                                    </IonRouterLink>
                                </IonCol>
                            ))
                        }
                    </IonRow>
                </IonGrid>
            </IonContent >
        </IonPage >

    )
}
