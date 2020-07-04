import React from "react";
import { AsyncStorage, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import MainTabNavigator from './ui/views/routes';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store)

const Index = () => {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <View style={styles.container} >
                <StatusBar barStyle={'dark-content'}  />
                <MainTabNavigator ref={(nav) => { this.navigator = nav; }} />
            </View>
        </PersistGate>
    </Provider>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
    },
});

export default Index;