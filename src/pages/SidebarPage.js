import React, { useEffect, useState } from 'react';
import { IonTitle, IonList, IonToolbar, IonHeader, IonContent, IonItem, IonMenu, IonToggle } from '@ionic/react';


export default function SidebarPage() {
    const [themeToggle, setThemeToggle] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia(`(prefers-color-scheme: dark)`);
        initializeDarkTheme(prefersDark.matches);
        prefersDark.addEventListener('change', (e) => {
            initializeDarkTheme(e.matches);
        });
    }, [])

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
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar color="tertiary">
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList inset={true}>
                    <IonItem>
                        <IonToggle checked={themeToggle} onIonChange={toggleChange} justify="space-between">
                            Dark Mode
                        </IonToggle>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    )
}
