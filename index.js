/**
 * @format
 */

import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import store from './src/App/store';
import {Provider} from 'react-redux';
import {Counter} from './src/features/counter/Counter';
import storage from './src/App/storage';

const abc = () => (
  <SafeAreaView>
    {/* <Provider store={store}>
      <Counter />
    </Provider> */}

    <Provider store={storage}>
      <Mongo />
    </Provider>
  </SafeAreaView>
);

AppRegistry.registerComponent(appName, () => abc);
