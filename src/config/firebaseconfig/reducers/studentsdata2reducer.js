const INITIAL_STATE = {
    label: "Login Reducer Here",
    userid:false
  };
  export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
      case "STUDENTDATA2":
      console.log(action.payload)
      state.userid = action.payload
      return state;
      default:
        return state;
    }
  }