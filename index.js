/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Provider from './src/provider';

const WrappedApp = () => {
    return (
        <Provider>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => WrappedApp);
