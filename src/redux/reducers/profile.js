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

    default:
      return state;
  }
}
