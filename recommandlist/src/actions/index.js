import axios from 'axios';
import {FETCH_DATA, ADD_TO_MYLIST, REMOVE_FROM_MYLIST} from './types';


export const getData = () => {
    return dispatch => {
      axios
        .get("moviedata.json")
        .then(res => {
          const data = res.data;
          dispatch({ type: FETCH_DATA, payload: data});
        })
        .catch(() => {
          console.log("error");
        });
    };
};

export const addtoMylist = (id) => {

  return {
      type: ADD_TO_MYLIST,
      payload:id
  };

}


export const removefromMylist = (id) => {

  return {
      type: REMOVE_FROM_MYLIST,
      payload:id
  };

}