import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const FavoritesView = props => {
    const { onPress, icon, text, short, containerStyles, iconColor } = props;

    return <TouchableOpacity 
        onPress={onPress} 
        style={{ ...styles.container, ...containerStyles }}
    >
        <Icon name={icon} color={iconColor} />
        {!short && <Text style={{ paddingLeft: 12 }} >{text}</Text>}
    </TouchableOpacity>    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', alignItems: 'center'
    }
});

export default FavoritesView