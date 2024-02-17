import React from 'react';
import { App as CapApp } from '@capacitor/app'
import { Browser } from '@capacitor/browser';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { setupIonicReact, IonApp, IonRouterOutlet } from '@ionic/react';
import { } from "@ionic/react-router"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './App.css';

import { IonReactRouter } from '@ionic/react-router';
import Tabs from './navigation/Tabs';
import Example from './pages/Example';
import WellcomePage from './pages/wellcom/WellcomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import { useSelector } from 'react-redux';
import HomeOperator from './components/homepage/HomeOperator';
import HomePriceList from './components/homepage/HomePricelist';
import HomeDetail from './components/homepage/HomeDetail';
setupIonicReact({ mode: 'ios' });

export default function App() {
  const [themeToggle, setThemeToggle] = useState(false);
  const { isAuthenticated } = useSelector(state => state.login)
  const { handleRedirectCallback } = useAuth0();

  useEffect(() => {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    initializeDarkTheme(prefersDark.matches);
    prefersDark.addEventListener('change', (e) => {
      initializeDarkTheme(e.matches);
    });

    CapApp.addListener('appUrlOpen', async ({ url }) => {
      if (url.includes('state') && (url.includes('code') || url.includes('error'))) {
        await handleRedirectCallback(url)
      }
      await Browser.close();
    })
  }, [handleRedirectCallback])


  const toggleChange = (e) => {
    toggleDarkTheme(e.detail.checked);
  }

  const toggleDarkTheme = (darkAdd) => {
    document.body.classList.toggle('dark', darkAdd)
  }

  const initializeDarkTheme = (isDark) => {
    setThemeToggle(isDark);
    toggleDarkTheme(isDark);
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {
            !isAuthenticated ? (
              <>
                <Redirect exact from="/" to="/wellcome" />
                <Route path="/wellcome" component={WellcomePage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
              </>
            ) : (
              <>
                <Redirect exact from="/" to="/app/home" />
                <Route path="/app/*" component={Tabs} exact />
                <Route path="/products/:type" component={HomeOperator} />
                <Route path="/products/:type/:op" component={HomePriceList} />
                <Route path="/products/:type/:op/:code" component={HomeDetail} />
              </>
            )
          }

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp >
  );
}
