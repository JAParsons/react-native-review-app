import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './home-stack';
import AboutStack from './about-stack';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  About: {
    screen: AboutStack
  }
});

export default createAppContainer(RootDrawerNavigator);
