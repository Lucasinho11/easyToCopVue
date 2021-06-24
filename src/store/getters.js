export const user = (state) => {
    return state.user
}
export const token = (state, token) => {
    state.user.token = token
} 
export const data = (state, data) => {
    state.user.data = data
}
export const drops = (state) => {
    
    return state.drops
}
export const actus = (state) => {
    
    return state.actus
}
export const msg = (state) => {
    
    return state.msg
}


