import React from "react";
import { Avatar } from 'react-native-elements';

const FeedAvatar = props => {
    const { user } = props;

    return user 
        ? <Avatar rounded source={{ uri: user.img }} size="xlarge" /> 
        : <Avatar rounded icon={{ name: 'account-circle' }} size="xlarge" /> 
}

export default FeedAvatar