const initialState = {
  name: "",
  surname: "",
  email: "",
  bio: "",
  title: "",
  area: "",
  image: "",
  username: ""
};




export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "SETPROFILE":
    return {
        ...state, 
        ...action.payload
    }
    case "ADDPROFILE":
      return {
        ...state, 
        ...action.payload
    }

    case "COMMENTPOST":
      return {
        ...state, 
        ...action.payload

      }

    // case "DELETEXP":
    //   return { ...state, deletedExperience: action.payload };
    

    default:
      return state;
  }
}
