

import { NavigationContainer, DefaultTheme } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from 'expo-font';


const Stack = createStackNavigator();

const theme = {
    // ...DefaultTheme,
    // colors: {
    //     ...DefaultTheme.colors,
    //     background: 'transparent'
    // }
}






const App = () => {

    return (

        <NavigationContainer theme={theme}>
            <StackNavigator screenOptions={{ HeaderShown: false }}
                initialRouteName={'Home'}>
                <Stack.Screen name="Home" component={Home} />

                <Stack.Screen name="Details" component={Details} />
            </StackNavigator>
        </NavigationContainer>


    );

}

export default App;
