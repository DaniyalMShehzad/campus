const INITIAL_STATE = {
    label: "studentData",
    userid: false
  };
  export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
      case "ADDDATATATYPE":
      console.log(action.payload)
      state.userid = action.payload
      return state;
      default:
        return state;
    }
  }