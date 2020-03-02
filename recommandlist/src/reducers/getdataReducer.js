import {FETCH_DATA, ADD_TO_MYLIST, REMOVE_FROM_MYLIST } from '../actions/types';

export default (state = {}, action) =>{
    switch(action.type){
        case FETCH_DATA:
            return action.payload;
        case ADD_TO_MYLIST:
            let listobject ={...state};
            let item = listobject.recommendations.filter(item=>item.id===action.payload)[0];
        
            listobject.mylist = [...listobject.mylist, item];
            listobject.recommendations = listobject.recommendations.filter(item=>item.id!==action.payload);

            return {...state, "mylist":[...listobject.mylist], "recommendations":[...listobject.recommendations]};
        
        case REMOVE_FROM_MYLIST:

            let mylistobject ={...state};
            let myitem = mylistobject.mylist.filter(item=>item.id===action.payload)[0];
            mylistobject.mylist = mylistobject.mylist.filter(item=>item.id!==action.payload);
    
            mylistobject.recommendations = [...mylistobject.recommendations, myitem];
            return {...state, "mylist":[...mylistobject.mylist], "recommendations":[...mylistobject.recommendations]};
         

        default:
            return state;
            

    }
}