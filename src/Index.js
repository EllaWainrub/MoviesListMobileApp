import React from "react";
import { Provider } from 'react-redux'
import MainTabNavigator from './ui/views/routes';
import { StatusBar, StyleSheet, View, Platform } from 'react-native';
import rootReducer from './reducers'
import { createStore } from 'redux'

const store = createStore(rootReducer);

const Index = () => {
    return <Provider store={store}>
        <View style={styles.container} >
            <StatusBar barStyle={'dark-content'}  />
            <MainTabNavigator ref={(nav) => { this.navigator = nav; }} />
        </View>
    </Provider>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
    },
});

export default Index;