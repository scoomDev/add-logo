/*eslint-disable */
function generateUUID() {
    let d = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (d + (Math.random() * 16)) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r&0x3|0x8)).toString(16);
    });
}

export default {
    auth_success(state, payload) {
        state.token = payload.token
        state.currentUser.username = payload.user.username
    },
    add_message(state, payload) {
        state.messages.push({
            uuid: generateUUID(),
            state: payload.state,
            content: payload.content
        })
    },
    remove_message(state, payload) {
        state.messages = state.messages.filter(message => message.uuid !== payload)
    }
}