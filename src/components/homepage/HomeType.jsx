import React from 'react'
import useSWR from 'swr';
import { IonGrid, IonRow, IonCol, IonIcon, IonText, IonNavLink, IonButton, IonRouterLink } from '@ionic/react';
import { grid } from "ionicons/icons"

export default function HomeType() {
    const { data, isLoading, error } = useSWR('/api/types?populate=operators');
    if (error) return <p>Error</p>
    if (isLoading) return <p>Loading</p>

    return (
        <IonGrid className='ion-padding'>
            <IonRow>
                {
                    data.data?.map((type) => (

                        <IonCol size='4' key={type.id} className='text-center'>
                            <IonRouterLink routerLink={`/products/${type.attributes.slug}`}>
                                <div>
                                    <div>
                                        <IonIcon icon={grid} size='large' color='white' />
                                    </div>
                                    <div>
                                        <IonText color='white' className='text-xs'>{type.attributes.name}</IonText>
                                    </div>
                                </div>
                            </IonRouterLink>
                        </IonCol>
                    ))
                }
            </IonRow>
        </IonGrid>
    )
}
