import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import QuoteScreen from "./src/screens/QuoteScreen";

const Stack = createStackNavigator();

const App = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Quote">
                    <Stack.Screen name="Quote" component={QuoteScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default App;