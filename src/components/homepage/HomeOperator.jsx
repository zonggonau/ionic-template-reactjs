import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonText, IonRow, IonGrid, IonCol, IonIcon, IonNavLink, IonPage, IonRouterLink } from '@ionic/react'
import useSWR from 'swr';
import React, { useEffect } from 'react'
import { } from '@ionic/react-router'
import { grid } from 'ionicons/icons';
import HomePriceList from './HomePricelist';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByOperator } from '../../slice/pricelistSlice';

export default function HomeOperator({ match }) {

    const qs = require('qs')
    const query = qs.stringify({
        sort: {
            name: 'ASC'
        },
        filters: {
            $and: [
                {
                    type: {
                        name: {
                            $eq: match.params.type
                        }
                    }
                }
            ]
        }
    }, {
        encodeValuesOnly: true
    })

    const { data, error, isLoading } = useSWR(`/api/operators?sort[name]=asc&filters[$and][0][type][name][$eq]=${match.params.type}`);
    // const { data, error, isLoading } = useSWR(`/api/operators?${query}}`);

    if (error) return <p>Error</p>

    if (isLoading) return <p>Loading</p>

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton slot="stop"></IonBackButton>
                    </IonButtons>
                    <IonTitle class="capitalize">TopUp {match.params.type}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid className='ion-padding'>
                    <IonRow>
                        {
                            data.data?.map((operator) => (
                                <IonCol size='4' key={operator.id} className='text-center'>
                                    <IonRouterLink routerLink={`/products/${match.params.type}/${operator.attributes.op}`}>
                                        <div>
                                            <div>
                                                <IonIcon icon={grid} size='large' color='white' />
                                            </div>
                                            <div>
                                                <IonText color='white' className='text-xs'>{operator.attributes.name}</IonText>
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
