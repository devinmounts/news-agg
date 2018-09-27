import constants from '../constants';
const { types, initialState} = constants;

const currentAddressReducer = (state = initialState.currentAddressId, action) =>{
  switch(action.type){
    case types.CURRENT_ADDRESS_ID:
    return action.localAddressId;
  default:
    return state
  }
}

export default currentAddressReducer;
