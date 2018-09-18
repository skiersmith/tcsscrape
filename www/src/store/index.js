import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'


var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//salty-temple-67586.herokuapp.com/' : '//localhost:5000/';
let api = axios.create({
    baseURL: baseUrl + 'api',
    timeout: 2000,
    withCredentials: true
})
let auth = axios.create({
    baseURL: baseUrl,
    timeout: 2000,
    withCredentials: true
})
vue.use(vuex)
// http://worldclockapi.com/api/json/utc/now
var store = new vuex.Store({
    state: {
        activeDeleteRecords: {},
        time: false,
        Executed: false,
        error: {},
        user: {},
        users: {},
        
    },
    mutations: {
        

    },
    actions: {
        
        userLogin({ commit, dispatch }, login) {
            auth.post('/login', login)
                .then(res => {

                    if (res.data.data.access === true) {
                        commit('setUser', res.data.data)
                        router.push({ name: 'Home' })
                        dispatch('authenticate')
                    }
                    else if (store.state.time === true) {
                        commit('setUser', res.data.data)
                        router.push({ name: 'Home' })
                        dispatch('authenticate')
                    }
                    else {
                        alert("Contact Manager to Login")
                        router.push({ name: "Register" })
                    }
                })
                .catch(err => {
                    commit('handleError', err)

                    router.push({ name: "Register" })
                })
        },
        
        logout({ commit, dispatch }, user) {
            auth.delete('/logout', user)
                .then(res => {

                    router.push({ name: "Register" })
                })
                .catch(err => {
                    console.log(err)
                    res.status(401).send({ Error: err })
                })
        },
        //^^^^^^^^^^^^^^USER/REGISTER/LOGOUT^^^^^^^^^^^//

        handleError({ commit, dispatch }, err) {
            commit('handleError', err)
        }
    }
})
export default store