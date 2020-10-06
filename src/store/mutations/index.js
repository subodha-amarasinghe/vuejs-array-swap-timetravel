export default {
    LOADING_ALL_POSTS(state) {
        state.postListLoading=true;
        state.postList=[];
        state.postListError={}
    },
    ALL_POSTS_RECEIVED(state, data) {
        state.postListLoaging=false;
        state.postList=data.data.filter((post,idx) => idx < 5);
        state.postListError={}
    },
    ALL_POSTS_ERROR(state, data) {
        state.postListLoaging=false;
        state.postList=[];
        state.postListErrordata=data
    },
    SWAP_POST(state, data) {
        let list=[...state.postList]
        let temp = list[data.from]
        list[data.from]=list[data.to]
        list[data.to]=temp
        state.postList=list;
        state.commitHistoty=[...[data], ...state.commitHistoty]
    },
    TIME_TRAVEL(state, index) {
        let postList=[...state.postList]
        let commitHistoty=[...state.commitHistoty]
        for (let i=0; i<=index; i++) {
            let temp = postList[commitHistoty[i].to]
            postList[commitHistoty[i].to]=postList[commitHistoty[i].from]
            postList[commitHistoty[i].from]=temp
        }
        state.postList=postList;
        state.commitHistoty=state.commitHistoty.filter((h, i) => i>index)
    }
}