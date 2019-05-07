const initialState = {
  videoRoom: {}
}

const videoRoomReducer = (state = initialState, action) => {

  switch(action.type) {

    case 'SAVE_VIDEO_ROOM_TO_STATE':
      return {...state, videoRoom: action.payload}

    case 'VIDEO_NEW_VIDEO_ROOM_TO_STATE':
      return {...state, video: action.payload}

      case 'DELETE_VIDEO_ROOM':
      return {...state, video: action.payload}

    default:
      return state;

  }
}


export default videoReducer;
