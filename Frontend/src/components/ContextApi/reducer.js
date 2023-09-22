export const initialState = {
    user: null,
};

export const actionTypes = { // action types are used to dispatch actions to the reducer
    SET_USER: "SET_USER",
}

const reducer = (state, action) => {// reducer is a function that takes two arguments: state and action
    console.log(action);
    switch (action.type) {// switch statement is used to check the action type
        case actionTypes.SET_USER:
            //  return {user: action.user};
            return { ...state, user: action.user };
        default:
            return state;
    }
};

export default reducer;