const INITIAL_STATE = {
  box: {
    items: [...(new Array(12))].map((item, idx) => {
      return {
        name: 'box - ' + (idx + 1)
      };
    }),
    numOfColumns: 1
  }
};

export default function uiReducer(state = INITIAL_STATE, action) {
  const { type, payload } = { ...action };

  switch (type) {
    case "selectNum":
      return {
        ...state,
        box: {
          items: state.box.items,
          numOfColumns: payload
        }
      }

    default:
      return state;
  }
}
