import parkReducer from './parkReducer'
import personReducer from './personReducer'
import reunionReducer from './reunionReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    parkReducer,
    personReducer,
    reunionReducer
})

export default allReducers