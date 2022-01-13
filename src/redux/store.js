
import cakeReducer  from './cake/CakeReducer'

import { createStore } from 'redux'
// const redux = require('redux')
// const createStore = redux.createStore

const store = createStore(cakeReducer)


export default store