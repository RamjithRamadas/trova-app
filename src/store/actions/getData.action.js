export const FETCH_DATA_STATE = "FETCH_DATA_STATE";


export const fetchDataState = (temp) => {
    return{
        type: FETCH_DATA_STATE,
        process : temp
    }
}