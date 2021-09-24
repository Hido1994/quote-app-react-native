import React from 'react';
import {DarkTheme as PaperTheme, Provider as PaperProvider} from 'react-native-paper';
import {DarkTheme as NavigationTheme, NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import QuoteScreen from "./src/screens/QuoteScreen";
import store from "./src/app/store";
import Status from "./src/components/Status";
import { Entypo } from '@expo/vector-icons';
import {StatusBar} from "expo-status-bar";
import TagScreen from "./src/screens/TagScreen";
const Stack = createStackNavigator();

const theme = {
    ...PaperTheme,
    ...NavigationTheme,
    colors: {
        ...PaperTheme.colors,
        ...NavigationTheme.colors,
    },
};

const App = () => {

    return (
        <ReduxProvider store={store}>
            <PaperProvider theme={theme}>
                <Status />
                <NavigationContainer theme={theme}>
                    <Stack.Navigator initialRouteName="Quote">
                        <Stack.Screen name="Quote" component={QuoteScreen}
                                      options={{ title:  <Entypo name="quote" size={24} color="white" />}}/>
                        <Stack.Screen name="Tag" component={TagScreen}
                                      options={{ title:  null}}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </ReduxProvider>
    );
}

export default App;