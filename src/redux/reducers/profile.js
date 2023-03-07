const initialState = {
  me:{name: "",
  surname: "",
  email: "",
  bio: "",
  title: "",
  area: "",
  image: "",
  username: ""},
  _id:[
   
  ]
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
    case "ADDFRIEND":
      return {
        ...state, 
        ...action.payload
    }
    default:
      return state;
  }
}
