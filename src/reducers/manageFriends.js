export function manageFriends(state={friends:[]}, action){

  switch(action.type){
    case 'ADD_FRIEND':
      return {...state,
        friends:[ ...state.friends, action.friend]
      }

    case 'REMOVE_FRIEND':
    let aFriend = state.friends.findIndex(friend => friend.id === action.id)
      return {...state,
        friends:[
          ...state.friends.slice(0, aFriend),
          ...state.friends.slice(aFriend + 1)]
      }

    default:
      return state;

    // case 'REMOVE_FRIEND':

  }

}
