import React, {Component} from 'react';
import {connect} from 'react-redux'
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FetchCoinData from './../Actions/FetchCoinData'
import CoinCard from './CoinCard'
import Spinner from 'react-native-loading-spinner-overlay'
import console = require('console');

class CryptoContainer extends Component {

    componentWillMount(){
this.props.FetchCoinData()
    }
renderCoinCards(){
const {crypto} = this.props
console.log(crypto)
return crypto.data.mao((coin, index)) =>
<CoinCard 
    key ={index}
    coin_name={coin.name}
    symbol={coin.symbol}
    price_usd = {coin.price_usd}
    percent_change_24h ={coin.percent_change_24h}
    percent_change_7d = {coin.percent_change_7d}

    />
}

    render() {
        const {crypto} = this.props
        if(crypto.isFetching){
            return(
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color:'#253145'}}
                        animation="fade"

                    />
                </View>
            )
        }
        return(
            <ScrollView contentContainerStyle={contentContainerStyle}>
                {this.renderCoinCards()}
            </ScrollView>
        )
    }
}

const styles = {
    contentContainer:{
        paddingBottom:100,
        paddingTop:55
    }
}

function mapStateToProps(state){
    return{
        crypto:state.crypto
    }
}

export default connect(mapStateToProps)(CryptoContainer)