function appReducer(state, action) {
    if (action.type==='DELETE_FLAVOR') {
        return state.filter(iceCream => iceCream.flavor!=action.flavor);
    } else {
        return state;
    }
}

export default appReducer;