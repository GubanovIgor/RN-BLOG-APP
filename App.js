import React, { useState } from "react";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { createStore } from 'redux'

import { bootstrap } from "./src/bootstrap";
import { AppNavigation } from "./src/navigation/AppNavigation";
import rootReducer from './src/store'

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={e => console.log(e)}
      />
    );
  }

  const store = createStore(rootReducer)

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
