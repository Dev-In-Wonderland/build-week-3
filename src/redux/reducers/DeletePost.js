const initialState = {
    deletedpost:""
  };
  
  
  
  
  export function postReducer(state = initialState, action) {
    switch (action.type) {
      case "REMOVE_POST":
      return {
          ...state, 
          deletedpost:state.deletedpost.filter((_,i)=>i!==action.payload)
      }
      
  
      default:
        return state;
    }
  }
  