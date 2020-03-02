import {combineReducers} from 'redux';
import getdataReducer from './getdataReducer';

export default combineReducers({
    origindata: getdataReducer
});