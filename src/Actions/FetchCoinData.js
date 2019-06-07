import axios from 'axios';
import {apiBaseURL} from './../utils/Constants'
import {FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL} from './../utils/ActionTypes'
import console = require('console');
const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '5000',
      'convert': 'USD'
    },
    headers: {
        'X-CMC_PRO_API_KEY': 'c8c228c1-56dd-408a-906c-3066ab2c9977'
    },
    json: true,
    gzip: true
  };

export default function FetchCoinData(){
return dispatch => {
    dispatch({type:FETCHING_COIN_DATA})

    return axios.get(requestOptions)
        .then(res => {
            console.log(res)
            dispatch({type:FETCHING_COIN_DATA_SUCCESS, payload:res})

        })
        .catch(err => {
            dispatch({type:FETCHING_COIN_DATA_FAIL, payload:err.message})
        })
}
}