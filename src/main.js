import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom'

import Tabs from './navigation/Tabs';
import { IonReactRouter } from '@ionic/react-router';
import Example from './pages/Example';
import HomePage from './pages/HomePage';

function MainRoute() {
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Redirect from="/" to="/app/home" />
                <Route path="/app" render={() => <Tabs />} />
                <Route path="/product/:id" component={Example} />
            </IonRouterOutlet>
        </IonReactRouter>

    );
}
export default MainRoute;