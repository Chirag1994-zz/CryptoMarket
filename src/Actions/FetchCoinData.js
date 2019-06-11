import axios from 'axios';
import {apiBaseURL} from './../utils/Constants'
import {FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL} from './../utils/ActionTypes'
// import console = require('console');


const d = {
    "status": {
        "timestamp": "2019-06-11T02:57:45.909Z",
        "error_code": 0,
        "error_message": null,
        "elapsed": 8,
        "credit_count": 1
    },
    "data": [
        {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "slug": "bitcoin",
            "circulating_supply": 17752375,
            "total_supply": 17752375,
            "max_supply": 21000000,
            "date_added": "2013-04-28T00:00:00.000Z",
            "num_market_pairs": 7546,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 1,
            "last_updated": "2019-06-11T02:57:39.000Z",
            "quote": {
                "USD": {
                    "price": 7971.13043495,
                    "volume_24h": 18271542806.2972,
                    "percent_change_1h": -0.112149,
                    "percent_change_24h": 3.81598,
                    "percent_change_7d": -1.72882,
                    "market_cap": 141506496655.1455,
                    "last_updated": "2019-06-11T02:57:39.000Z"
                }
            }
        },
        {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "circulating_supply": 106439884.2491,
            "total_supply": 106439884.2491,
            "max_supply": null,
            "date_added": "2015-08-07T00:00:00.000Z",
            "num_market_pairs": 5334,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 2,
            "last_updated": "2019-06-11T02:57:24.000Z",
            "quote": {
                "USD": {
                    "price": 245.782861853,
                    "volume_24h": 7871736707.93853,
                    "percent_change_1h": -0.135497,
                    "percent_change_24h": 4.6968,
                    "percent_change_7d": -1.85735,
                    "market_cap": 26161099366.045856,
                    "last_updated": "2019-06-11T02:57:24.000Z"
                }
            }
        },
        {
            "id": 52,
            "name": "XRP",
            "symbol": "XRP",
            "slug": "ripple",
            "circulating_supply": 42238947941,
            "total_supply": 99991610348,
            "max_supply": 100000000000,
            "date_added": "2013-08-04T00:00:00.000Z",
            "num_market_pairs": 426,
            "tags": [],
            "platform": null,
            "cmc_rank": 3,
            "last_updated": "2019-06-11T02:57:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.396589762659,
                    "volume_24h": 1424155028.51097,
                    "percent_change_1h": -0.125185,
                    "percent_change_24h": 2.13007,
                    "percent_change_7d": -5.71558,
                    "market_cap": 16751534338.887045,
                    "last_updated": "2019-06-11T02:57:03.000Z"
                }
            }
        },
        {
            "id": 2,
            "name": "Litecoin",
            "symbol": "LTC",
            "slug": "litecoin",
            "circulating_supply": 62171326.4371839,
            "total_supply": 62171326.4371839,
            "max_supply": 84000000,
            "date_added": "2013-04-28T00:00:00.000Z",
            "num_market_pairs": 569,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 4,
            "last_updated": "2019-06-11T02:57:07.000Z",
            "quote": {
                "USD": {
                    "price": 128.049129225,
                    "volume_24h": 5504897833.17945,
                    "percent_change_1h": -0.137742,
                    "percent_change_24h": 10.8229,
                    "percent_change_7d": 20.8617,
                    "market_cap": 7960984213.0446205,
                    "last_updated": "2019-06-11T02:57:07.000Z"
                }
            }
        },
        {
            "id": 1831,
            "name": "Bitcoin Cash",
            "symbol": "BCH",
            "slug": "bitcoin-cash",
            "circulating_supply": 17831250,
            "total_supply": 17831250,
            "max_supply": 21000000,
            "date_added": "2017-07-23T00:00:00.000Z",
            "num_market_pairs": 328,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 5,
            "last_updated": "2019-06-11T02:57:05.000Z",
            "quote": {
                "USD": {
                    "price": 391.42916713,
                    "volume_24h": 1531281367.78989,
                    "percent_change_1h": -0.208641,
                    "percent_change_24h": 3.30193,
                    "percent_change_7d": -2.99199,
                    "market_cap": 6979671336.386812,
                    "last_updated": "2019-06-11T02:57:05.000Z"
                }
            }
        },
        {
            "id": 1765,
            "name": "EOS",
            "symbol": "EOS",
            "slug": "eos",
            "circulating_supply": 918615274.9932,
            "total_supply": 1015315280.6734,
            "max_supply": null,
            "date_added": "2017-07-01T00:00:00.000Z",
            "num_market_pairs": 319,
            "tags": [],
            "platform": null,
            "cmc_rank": 6,
            "last_updated": "2019-06-11T02:57:05.000Z",
            "quote": {
                "USD": {
                    "price": 6.40528843545,
                    "volume_24h": 2280484961.61202,
                    "percent_change_1h": -0.266983,
                    "percent_change_24h": 3.73673,
                    "percent_change_7d": -5.45356,
                    "market_cap": 5883995797.541665,
                    "last_updated": "2019-06-11T02:57:05.000Z"
                }
            }
        },
        {
            "id": 1839,
            "name": "Binance Coin",
            "symbol": "BNB",
            "slug": "binance-coin",
            "circulating_supply": 141175490.242,
            "total_supply": 189175490.242,
            "max_supply": null,
            "date_added": "2017-07-25T00:00:00.000Z",
            "num_market_pairs": 158,
            "tags": [],
            "platform": null,
            "cmc_rank": 7,
            "last_updated": "2019-06-11T02:57:03.000Z",
            "quote": {
                "USD": {
                    "price": 31.7704255562,
                    "volume_24h": 464615983.139594,
                    "percent_change_1h": -0.0937838,
                    "percent_change_24h": 3.87876,
                    "percent_change_7d": 2.97142,
                    "market_cap": 4485205403.093501,
                    "last_updated": "2019-06-11T02:57:03.000Z"
                }
            }
        },
        {
            "id": 3602,
            "name": "Bitcoin SV",
            "symbol": "BSV",
            "slug": "bitcoin-sv",
            "circulating_supply": 17829173.3626776,
            "total_supply": 17829173.3626776,
            "max_supply": 21000000,
            "date_added": "2018-11-09T00:00:00.000Z",
            "num_market_pairs": 127,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 8,
            "last_updated": "2019-06-11T02:57:09.000Z",
            "quote": {
                "USD": {
                    "price": 190.25223753,
                    "volume_24h": 499178870.818891,
                    "percent_change_1h": 0.0505614,
                    "percent_change_24h": 3.32394,
                    "percent_change_7d": -13.7647,
                    "market_cap": 3392040125.5596876,
                    "last_updated": "2019-06-11T02:57:09.000Z"
                }
            }
        },
        {
            "id": 825,
            "name": "Tether",
            "symbol": "USDT",
            "slug": "tether",
            "circulating_supply": 3276289279.61657,
            "total_supply": 3470057493.36343,
            "max_supply": null,
            "date_added": "2015-02-25T00:00:00.000Z",
            "num_market_pairs": 2409,
            "tags": [],
            "platform": {
                "id": 83,
                "name": "Omni",
                "symbol": "OMNI",
                "slug": "omni",
                "token_address": "31"
            },
            "cmc_rank": 9,
            "last_updated": "2019-06-11T02:57:16.000Z",
            "quote": {
                "USD": {
                    "price": 1.00870158415,
                    "volume_24h": 18720291213.5924,
                    "percent_change_1h": 0.134734,
                    "percent_change_24h": 0.649392,
                    "percent_change_7d": 1.08741,
                    "market_cap": 3304798186.4828963,
                    "last_updated": "2019-06-11T02:57:16.000Z"
                }
            }
        },
        {
            "id": 512,
            "name": "Stellar",
            "symbol": "XLM",
            "slug": "stellar",
            "circulating_supply": 19332416641.1377,
            "total_supply": 105062532892.064,
            "max_supply": null,
            "date_added": "2014-08-05T00:00:00.000Z",
            "num_market_pairs": 267,
            "tags": [],
            "platform": null,
            "cmc_rank": 10,
            "last_updated": "2019-06-11T02:57:03.000Z",
            "quote": {
                "USD": {
                    "price": 0.122576300497,
                    "volume_24h": 336691491.638621,
                    "percent_change_1h": -0.353146,
                    "percent_change_24h": 2.94146,
                    "percent_change_7d": -3.75557,
                    "market_cap": 2369696111.5372977,
                    "last_updated": "2019-06-11T02:57:03.000Z"
                }
            }
        },
        {
            "id": 2010,
            "name": "Cardano",
            "symbol": "ADA",
            "slug": "cardano",
            "circulating_supply": 25927070538,
            "total_supply": 31112483745,
            "max_supply": 45000000000,
            "date_added": "2017-10-01T00:00:00.000Z",
            "num_market_pairs": 85,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 11,
            "last_updated": "2019-06-11T02:57:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.0844620356551,
                    "volume_24h": 137669446.215628,
                    "percent_change_1h": -0.639636,
                    "percent_change_24h": 5.75017,
                    "percent_change_7d": -3.50537,
                    "market_cap": 2189853156.212849,
                    "last_updated": "2019-06-11T02:57:04.000Z"
                }
            }
        },
        {
            "id": 1958,
            "name": "TRON",
            "symbol": "TRX",
            "slug": "tron",
            "circulating_supply": 66682072191.4,
            "total_supply": 99281283754.3,
            "max_supply": null,
            "date_added": "2017-09-13T00:00:00.000Z",
            "num_market_pairs": 227,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 12,
            "last_updated": "2019-06-11T02:57:04.000Z",
            "quote": {
                "USD": {
                    "price": 0.0312527284906,
                    "volume_24h": 775370453.043515,
                    "percent_change_1h": -0.0642902,
                    "percent_change_24h": 4.57129,
                    "percent_change_7d": -8.46105,
                    "market_cap": 2083996697.3884127,
                    "last_updated": "2019-06-11T02:57:04.000Z"
                }
            }
        },
        {
            "id": 328,
            "name": "Monero",
            "symbol": "XMR",
            "slug": "monero",
            "circulating_supply": 17034485.2967055,
            "total_supply": 17034485.2967055,
            "max_supply": null,
            "date_added": "2014-05-21T00:00:00.000Z",
            "num_market_pairs": 128,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 13,
            "last_updated": "2019-06-11T02:57:02.000Z",
            "quote": {
                "USD": {
                    "price": 87.7072147729,
                    "volume_24h": 142502324.290706,
                    "percent_change_1h": 0.108365,
                    "percent_change_24h": 4.52678,
                    "percent_change_7d": -0.612345,
                    "market_cap": 1494047260.4639564,
                    "last_updated": "2019-06-11T02:57:02.000Z"
                }
            }
        },
        {
            "id": 131,
            "name": "Dash",
            "symbol": "DASH",
            "slug": "dash",
            "circulating_supply": 8858790.20923425,
            "total_supply": 8858790.20923425,
            "max_supply": 18900000,
            "date_added": "2014-02-14T00:00:00.000Z",
            "num_market_pairs": 240,
            "tags": [
                "mineable"
            ],
            "platform": null,
            "cmc_rank": 14,
            "last_updated": "2019-06-11T02:57:03.000Z",
            "quote": {
                "USD": {
                    "price": 150.103343,
                    "volume_24h": 398399235.21188,
                    "percent_change_1h": 0.10299,
                    "percent_change_24h": 4.50529,
                    "percent_change_7d": -2.41072,
                    "market_cap": 1329734025.3417304,
                    "last_updated": "2019-06-11T02:57:03.000Z"
                }
            }
        },

    ]}

 
export default function FetchCoinData(){
return dispatch => {
    dispatch({type:FETCHING_COIN_DATA})

    return axios.get(`${apiBaseURL}/v1/cryptocurrency/listings/latest`,{ 'headers': { 'X-CMC_PRO_API_KEY': 'c8c228c1-56dd-408a-906c-3066ab2c9977'
}})
        .then(response => {
            // console.log(res)
            dispatch({type:FETCHING_COIN_DATA_SUCCESS, payload:response.data.data})

        })
        .catch(err => {
            dispatch({type:FETCHING_COIN_DATA_FAIL, payload:response.status})
        })
}
}
