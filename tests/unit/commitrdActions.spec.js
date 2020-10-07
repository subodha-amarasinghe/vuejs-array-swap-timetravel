import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex';
import CommitedActions from '@/components/CommitedActions.vue'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CommitedActions.vue', () => {
    let store;


    // add this before each
    beforeEach(() => {
        store = new Vuex.Store({
            state: {}
        });
    })
    it('should be vue instance', () => {
        const wrapper=shallowMount(CommitedActions, {
            localVue,
            store
        });
        expect(wrapper.vm).toBeTruthy()
    });
})
