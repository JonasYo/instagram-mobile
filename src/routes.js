import { createAppContainer ,createStackNavigator } from 'react-native'

import Feed from './page/Feed';
import New from './page/New';

export default createAppContainer(
    createStackNavigator({
        Feed,
        New
    })
);