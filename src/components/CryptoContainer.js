import React, {Component} from 'react';
import {connect} from 'react-redux'
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import FetchCoinData from './../Actions/FetchCoinData'
import CoinCard from './CoinCard'
import Spinner from 'react-native-loading-spinner-overlay'
// import console = require('console');

class CryptoContainer extends Component {

    componentWillMount(){
this.props.FetchCoinData()
    }
renderCoinCards(){
const {crypto} = this.props
// console.log(crypto)
if(crypto.data.length > 1){
return crypto.data.map((coin, index) =>
<CoinCard 
    key ={index}
    coin_name={coin.name}
    symbol={coin.symbol}
    price_usd = {coin.quote.USD.price}
    percent_change_24h ={coin.quote.USD.percent_change_24h}
    percent_change_7d = {coin.quote.USD.percent_change_7d}

    />
)}
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
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
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

export default connect(mapStateToProps, {FetchCoinData})(CryptoContainer)