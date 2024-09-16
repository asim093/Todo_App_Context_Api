export const Reducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return [...state, action.payload];

        case "remove":
            return state.filter(g => g.id !== action.payload);

        case "update":
            return state.map(g => g.id === action.payload.id ? { ...g, todo: action.payload.todo } : g);

        default:
            return state;
    }
};
