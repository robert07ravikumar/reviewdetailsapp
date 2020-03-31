import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'

const screens = {
    Home : {
        screen: Home,
        navigationOptions:{
            title: 'Game Zone'
        }
    },
    ReviewDetails : {
        screen: ReviewDetails
        
    }
}
const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor : '#444',
        headerStyle:{
            backgroundColor : '#eee',
            height:60,
            
        
        }
    }
});

export default createAppContainer(HomeStack);