/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ImageBrowserApp from './ImageBrowserApp'
import {name as appName} from './app.json';
import {name as ImageBrowserAppName} from './ImageBrowserApp.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('ImageBrowserApp', () => ImageBrowserApp);


