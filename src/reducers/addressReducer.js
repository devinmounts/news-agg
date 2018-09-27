import constants from './../constants';
const { initialState, types } = constants;

const addressReducer = ( state = initialState.objectList, action ) => {
  let newAddressByIdEntry;
  let newAddressByIdStateSlice;
  switch(action.type) {
    case types.REQUEST_RATE:
      newAddressByIdEntry = {
        isFetching: true,
        address: action.address,
        localAddressId: action.localAddressId
      };
      newAddressByIdStateSlice = Object.assign({}, state, {
        [action.localAddressId]: newAddressByIdEntry
      });
      return newAddressByIdStateSlice;
    case types.RECEIVE_RATE:
      newAddressByIdEntry = Object.assign({}, state[action.localAddressId], {
        isFetching: false,
        address: action.address,
        rate: action.rate,
        provider: action.provider,
        localAddressId: action.localAddressId
      });
      newAddressByIdStateSlice = Object.assign({}, state, {
        [action.localAddressId]: newAddressByIdEntry
      });
      return newAddressByIdStateSlice;
    default:
      return state;
  }
}

export default addressReducer;
