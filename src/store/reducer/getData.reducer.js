import {FETCH_DATA_STATE} from '../actions/getData.action'
const intitialState = {
    dataState: []
}


export default (state=intitialState, action) => {
    switch(action.type){
        case FETCH_DATA_STATE:
            return {
                ...state,
                dataState: action.process
            }
        
    }
    return state;
}