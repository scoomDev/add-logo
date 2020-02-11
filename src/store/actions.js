import Axios from "axios"

// const API_URL = process.env.NODE_ENV === "production" ? 'https://add-logo-api.ci-com.fr/api' : 'http://localhost:8000/api'
const AUTH_URL = process.env.NODE_ENV === "production" ? 'https://add-logo-api.ci-com.fr/authentication_token' : 'http://localhost:8000/authentication_token'

export default {
    login({commit}, user) {
        return new Promise((resolve, reject) => {
            Axios.post(AUTH_URL, user, {headers: {'Content-Type': 'application/json'}})
                .then(response => {
                    const token = response.data.token
                    sessionStorage.setItem('token', token)
                    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    commit('auth_success', {token: token, user: user})
                    commit('add_message', {state: 'success', content: `Bon retour parmi nous ${user.username}`})
                    resolve(response)
                })
                .catch(error => {
                    commit('add_message', {state: 'error', content: error.response.data})
                    sessionStorage.removeItem('token')
                    reject(error.response.data)
                })
        })
    }
}