import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/Header';
import TabHeader from '../components/TabHeader';

const OfficialPage = () => (
    <IonPage>
        <TabHeader title={'Official Page'} />
        <IonContent>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                OfficialPage
            </div>
        </IonContent>
    </IonPage>
);

export default OfficialPage