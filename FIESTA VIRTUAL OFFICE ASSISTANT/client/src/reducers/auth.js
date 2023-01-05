const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case 'AUTH_ADMIN':
            localStorage.setItem('profile', JSON.stringify({ ...action.data }))

            return { ...state, authData: action.data };
        case 'AUTH_MANAGER':
            localStorage.setItem('profile', JSON.stringify({ ...action.data }))

            return { ...state, authData: action.data };
        case 'AUTH_WRITER':
            localStorage.setItem('profile', JSON.stringify({ ...action.data }))

            return { ...state, authData: action.data };
        case 'AUTH_TRAINEE':
            localStorage.setItem('profile', JSON.stringify({ ...action.data }))

            return { ...state, authData: action.data };



        case 'LOGOUT':
            localStorage.clear();

            return { ...state, authData: null }
        default:
            return state;
    }

}

export default authReducer;