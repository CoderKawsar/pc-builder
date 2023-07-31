const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  pc: [],
  components: [],
};

const buildPcSlice = createSlice({
  name: "buildPC",
  initialState,
  reducers: {
    selectComponent: (state, action) => {
      const itemsFound = state.pc.find(
        (item) => item.category === action.payload.category
      );

      if (!itemsFound) {
        state.pc.push(action.payload);
        state.components.push(action.payload.category);
      } else {
        state.pc = state.pc.filter(
          (item) => item.category !== action.payload.category
        );
        state.pc.push(action.payload);
      }
    },
    removeComponent: (state, action) => {
      const newState = state.pc.filter((item) => {
        return item.category !== action.payload.category;
      });

      state.pc = newState;
      state.components = state.components.filter(
        (component) => component !== action.payload.category
      );
    },
  },
});

export default buildPcSlice.reducer;
export const { selectComponent, removeComponent } = buildPcSlice.actions;
