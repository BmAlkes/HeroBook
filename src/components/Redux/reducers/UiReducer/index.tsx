import { UiState} from './interfaces';

const UI_ACTION_TYPES = {
  IS_TYPING: `@uiReducer/IS_TYPING`,
};

const INIT_STATE: UiState = {
  isTyping: false,
};

export default function UiReducer(state = INIT_STATE, action): UiState {
  switch (action.type) {
    case UI_ACTION_TYPES.IS_TYPING: {
      return {
        ...state,
        isTyping: action.payload.isTyping,
      };
    }

    default:
      return state;
  }
}


export function updateTyping(isTyping) {
  return {
    type: UI_ACTION_TYPES.IS_TYPING,
    payload: {
      isTyping: isTyping
    },
  };
}

