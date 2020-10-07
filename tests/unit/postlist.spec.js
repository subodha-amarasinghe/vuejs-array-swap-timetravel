import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex';
import PostList from '@/components/PostList.vue'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('PostList.vue', () => {
    let actions;
    let store;


    // add this before each
    beforeEach(() => {
        actions = {
            getAllPosts: jest.fn(),
            swapPost: jest.fn(),
        };
        store = new Vuex.Store({
            state: {
                PostList:[]
            },
            actions
        });
    })
    it('should dispatch action when created', () => {
        shallowMount(PostList, {
            localVue,
            store
        });
        expect(actions.getAllPosts).toHaveBeenCalled();
    });
})
