import React from 'react';
import { IonApp, IonContent, IonPage } from '@ionic/react';
import '@ionic/react/css/ionic.bundle.css';
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonContent className="ion-padding">Hello World</IonContent>
    </IonPage>
  </IonApp>
);

export default App;
