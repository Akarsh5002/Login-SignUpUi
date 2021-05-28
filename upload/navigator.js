import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Home';
import SignUp from './SignUp';

const stackNavigatorOptions = {
  headerShown: false,
};
const AppNavigator = createStackNavigator(
  {
   Home:{screen:Home},
   SignUp:{screen:SignUp},
  
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);
export default createAppContainer(AppNavigator);
