const INITIAL_STATE = {
    label: "studentData",
    userid: true
  };
  export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
      case "ADDDATATATYPE":
      console.log(action.payload)
      state.userid = action
      return state;
      default:
        return state;
    }
  }