
import { combineReducers } from '@reduxjs/toolkit'
import { cartreducer } from './reducer'

const rootred = combineReducers({
    cartreducer, // State slice name will be `cartreducer`

});

export default rootred;