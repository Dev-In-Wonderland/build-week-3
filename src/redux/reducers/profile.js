const initialState = {
  profile: { name: "", surname: "", email: "", bio: "", title: "", area: "", image: "", username: "" },
  currentprofile: { name: "", surname: "", email: "", bio: "", title: "", area: "", image: "", username: "" },
  friends: [],
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "SETPROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    case "ADDPROFILE":
      return {
        ...state,
        currentprofile: action.payload,
      };
    case "ADDFRIEND":
      return {
        ...state,
        friends: [...state.friends, action.payload],
      };
    default:
      return state;
  }
}
