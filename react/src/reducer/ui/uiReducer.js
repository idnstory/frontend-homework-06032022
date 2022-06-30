const INITIAL_STATE = {
  box: {
    items: [...(new Array(12))].map((item, idx) => {
      return {
        name: 'box - ' + (idx + 1)
      };
    }),
    numOfColumns: 0
  }
};

export default function uiReducer(state = INITIAL_STATE, action) {
  const { type } = { ...action };
  switch (type) {
    default:
      return state;
  }
}
