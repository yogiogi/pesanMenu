/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import router from './src/Router';

AppRegistry.registerComponent(appName, () => router);
