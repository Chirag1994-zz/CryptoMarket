import React from 'react';
import {View, Text } from 'react-native';

const Header = () => {
    return(
        <View style={{justifyContent:"center", display:"flex", flexDirection:"row", alignItems:"flex-start"}}>
            <Text style={{color:"#fff",paddingTop:10}}>
                Crypto Markets Live
            </Text>
        </View>
    )
}

export default Header;