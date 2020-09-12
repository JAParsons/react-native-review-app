import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/review-details';
import About from '../screens/about';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'BookZone'
    }
  },
  ReviewDetails: {
    screen: ReviewDetails
  },
  About: {
    screen: About
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#eee', height: 90 }
  }
});

export default createAppContainer(HomeStack);
