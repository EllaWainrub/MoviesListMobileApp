import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const MovieRate = props => {
    return <View style={{ ...styles.container, ...props.containerStyles }}>
        <ProgressCircle
            percent={30}
            radius={24}
            borderWidth={4}
            color="#d2d532"
            shadowColor="#423d0f"
            bgColor="#081c22"
        >
            <Text style={{ fontSize: 12, color: '#fff', fontWeight: '500' }}>{props.voteAverage*10}%</Text>
        </ProgressCircle>
        <Text style={{ paddingLeft: 12 }} >User Score</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', alignItems: 'center'
    }
})

export default MovieRate