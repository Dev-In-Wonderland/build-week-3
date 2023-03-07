const initialState = {
  profile: {
    name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: "",
    image: "",
    username: "",
  },
  comment: [{ _id: "", comment: "", rate: 1, elementId: "", author: "" }],
  expieriences: [],
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
        ...action.payload,
      };

    case "COMMENTPOST":
      return {
        ...state,

        comment: action.payload,
      };

    // case "DELETEXP":
    //   return { ...state, deletedExperience: action.payload };

    default:
      return state;
  }
}
