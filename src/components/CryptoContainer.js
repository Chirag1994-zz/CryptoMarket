import React, {Component} from 'react';
import {connect} from 'react-redux'
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import FetchCoinData from './../Actions/FetchCoinData'
import CoinCard from './CoinCard'
import Spinner from 'react-native-loading-spinner-overlay'
import { SearchBar, Header } from 'react-native-elements';

// import console = require('console');

class CryptoContainer extends Component {
    constructor(props) {
        super(props);
    
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
          search:'',
          cryptos:[]
        }
        this.arrayholder = [];
        this.updateSearch = this.updateSearch.bind(this);
      }
    componentWillMount(){
this.props.FetchCoinData()
    }

renderCoinCards(data){
    if(data){
        return data.map((coin, index) =>
        <CoinCard 
            key ={index}
            coin_name={coin.name}
            symbol={coin.symbol}
            price_usd = {coin.quote.USD.price}
            percent_change_24h ={coin.quote.USD.percent_change_24h}
            percent_change_7d = {coin.quote.USD.percent_change_7d}
            />
        )}
        
    
const {crypto} = this.props
this.arrayholder = crypto.data;
if(crypto.data.length > 1 && this.state.search==""){
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
clear = () => {
    this.search.clear();
  };

// {coin.symbol.includes(this.state.search)}

updateSearch(text){
    
      //passing the inserted text in textinput
      const newData = this.arrayholder.filter(function(item) {
        //applying filter for the inserted text in search bar
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.renderCoinCards(newData)
      this.setState({
        //setting the filtered newData on datasource
        //After setting the data it will automatically re-render the view
      
        search:text,
      });
}

    render() {
        const {crypto} = this.props
        if(crypto.isFetching){
            return(

                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color:'#253145'}}
                        animation="fade"

                    />
               
            )
        }
        return(
            <View>
            <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'CryptoMarket', style: { color: '#fff'} }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
                         <SearchBar 
                            
                            onChangeText={text => this.updateSearch(text)}
          onClear={text => this.updateSearch('')}
          placeholder="Type Here..."
          value={this.state.search}
                             />

                           
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        
                {this.renderCoinCards()}
            </ScrollView>
            </View>
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