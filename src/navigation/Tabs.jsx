import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';

import { home, grid, storefront, list, heart } from 'ionicons/icons';

import CategoriPage from '../pages/CategoriPage';
import OfficialPage from '../pages/OfficialPage';
import WishlistPage from '../pages/WishlistPage';
import HistoryPage from '../pages/HistoryPage';
import HomePage from '../pages/HomePage';

function Tabs() {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/app/home" render={() => <HomePage />} />
                <Route path="/app/category" render={() => <CategoriPage />} />
                <Route path="/app/official" render={() => <OfficialPage />} />
                <Route path="/app/wishlist" render={() => <WishlistPage />} />
                <Route path="/app/history" render={() => <HistoryPage />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom" color={'light'} className='pt-3 pb-2 rounded-tl-3xl rounded-tr-3xl'>
                <IonTabButton tab="home" href="/app/home">
                    <IonIcon icon={home} size='medium' />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="category" href="/app/category">
                    <IonIcon icon={grid} size='medium' />
                    <IonLabel>Category</IonLabel>
                </IonTabButton>
                <IonTabButton tab="official" href="/app/official">
                    <IonIcon icon={storefront} size='medium' />
                    <IonLabel>Official Store</IonLabel>
                </IonTabButton>
                <IonTabButton tab="wishlist" href="/app/wishlist">
                    <IonIcon icon={heart} size='medium' />
                    <IonLabel>wishlist</IonLabel>
                </IonTabButton>

                <IonTabButton tab="history" href="/app/history" >
                    <IonIcon icon={list} size='medium' />
                    <IonLabel>Transaksi</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs >



    );
}
export default Tabs;