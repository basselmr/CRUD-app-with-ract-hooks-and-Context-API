const AppReducer = (state, action) => {
    switch (action.type) {
        case "REMOVE_USER":
            console.log("state before removing" + JSON.stringify(state))
            console.log("remove " + action.payload)
            return {
                users: state.users.filter(usr => {
                    return usr.id !== action.payload
                })
            }
        case "ADD_USER":
            console.log(action.payload)
            return {
                users: [...state.users, action.payload]
            }
        case "EDIT_USER":
            const updatedUser = action.payload;
            const updateUsers = state.map(usr => {
                if (usr.id === updatedUser.id) {
                    return updatedUser
                }
                return usr;
            })
            return { users: updateUsers };
        default:
            return state;
    }
}
export default AppReducer;