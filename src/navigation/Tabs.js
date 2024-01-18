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
            <IonTabBar slot="bottom" color={'light'} >
                <IonTabButton tab="home" href="/app/home">
                    <IonIcon icon={home} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="category" href="/app/category">
                    <IonIcon icon={grid} />
                    <IonLabel>Category</IonLabel>
                </IonTabButton>
                <IonTabButton tab="official" href="/app/official">
                    <IonIcon icon={storefront} />
                    <IonLabel>Official Store</IonLabel>
                </IonTabButton>
                <IonTabButton tab="wishlist" href="/app/wishlist">
                    <IonIcon icon={heart} />
                    <IonLabel>wishlist</IonLabel>
                </IonTabButton>

                <IonTabButton tab="history" href="/app/history">
                    <IonIcon icon={list} />
                    <IonLabel>History</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs >



    );
}
export default Tabs;