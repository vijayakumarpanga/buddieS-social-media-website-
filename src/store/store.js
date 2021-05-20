import {createStore,applyMiddleware} from  'redux'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'
import reducer from '../reducers/reducer.js'
 
let store
export default function configureStore(){
  store  = createStore(reducer,applyMiddleware(thunk,logger))
  return store
}