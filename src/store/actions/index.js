import { fetchAllPosts } from '../api'
export default {
    getAllPosts({commit}) {
        commit("LOADING_ALL_POSTS")
        fetchAllPosts().then(data => {
            commit("ALL_POSTS_RECEIVED", data)
        }).catch(error => {
            commit("ALL_POSTS_ERROR", error)
        })
    },
    swapPost({commit}, data) {
        commit("SWAP_POST", data)
    },
    timeTravel({commit}, index) {
        commit("TIME_TRAVEL", index)
    }
}