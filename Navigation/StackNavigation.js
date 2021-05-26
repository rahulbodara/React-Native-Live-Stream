import React from 'react';
//import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CreateAccount from '../Authentication/CreateAccount';
import HomeScreen from '../Authentication/Home';
import VideoShow from '../Authentication/Videoshow';
import DrawerScreen from '../Navigation/DrawerNavigation';
import Newsdetail from '../Authentication/News/News_detail';
import Newssearch from '../Authentication/News/News_search';
import Newsoverlay from '../Authentication/News/News_overlay';
import Home_LiveScreen from '../Authentication/Home_Live'
import { Text, View , Image , TouchableOpacity} from 'react-native';
import TabScreen from '../Navigation/TabNavigation';
import NewsScreens from '../Authentication/News/News';
import Vediomenu from '../Authentication/Videos/Video_menu';
import Videologin from '../Authentication/Videos/Video_login';
import Fightersdetails from '../Authentication/Fighters/Fighters_details';
import Fighteroverlay from '../Authentication/Fighters/Fighters_Overlay';
import ThankyouScreen from '../Authentication/Contact/Thankyou';
import GalleryScreen from '../Authentication/Gallery/Gallery';
import LiveVideoScreen from '../Authentication/Live_video_show';
import loginScreen from '../Authentication/login'





const Stack = createStackNavigator();

const StackScreen = ({navigation}) =>{
    return(
      
        <Stack.Navigator initialRouteName="drawer" 
                        headerMode='none' >
            <Stack.Screen name="drawer" component={DrawerScreen} />
            <Stack.Screen name="tab" component={TabScreen} />
            {/* //<Stack.Screen name="homelive" component={Home_LiveScreen}/>     */}
            <Stack.Screen name="create_account" component={CreateAccount} />
            <Stack.Screen name="vedioshow" component={VideoShow} />          
            <Stack.Screen name="newsdetail" component={Newsdetail} />
            <Stack.Screen name="newsoverlay" component={Newsoverlay} />
            <Stack.Screen name="newssearch" component={Newssearch} />
            <Stack.Screen name="vediomenu" component={Vediomenu} />
            <Stack.Screen name="videologin" component={Videologin} />
            <Stack.Screen name="fightersdetails" component={Fightersdetails} />
            <Stack.Screen name="fightersoverlay" component={Fighteroverlay} />
            <Stack.Screen name="thankyou" component={ThankyouScreen} />
            <Stack.Screen name="login" component={loginScreen} />
            <Stack.Screen name="livevideoscreen" component={LiveVideoScreen} />
           
            {/* <Stack.Screen name="galleryScreen" component={GalleryScreen} /> */}
            
            
         
        </Stack.Navigator>
      
    );
}

export default StackScreen;