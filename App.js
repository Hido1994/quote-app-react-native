import React from 'react';
import {DefaultTheme as PaperDefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme as NavigationDefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import QuoteScreen from "./src/screens/QuoteScreen";
import store from "./src/app/store";

const Stack = createStackNavigator();

const theme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors,
        primary: 'black',
        background: '#9e9e9e'
    },
};

const App = () => {
    return (
        <ReduxProvider store={store}>
            <PaperProvider theme={theme}>
                <NavigationContainer theme={theme}>
                    <Stack.Navigator initialRouteName="Quote">
                        <Stack.Screen name="Quote" component={QuoteScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </ReduxProvider>
    );
}

export default App;