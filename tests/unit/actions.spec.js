
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
// import { expect } from 'chai'
 import {actions} from '@/store/actions';
 
import {fetchAllPosts} from '@/store/api';
import store from '@/store';

const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock('@/store/api')

test('fetch posts return by api', async() => {
    let store;
    const items = [{id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:5}]
    fetchAllPosts.mockResolvedValue(items)
    store = new Vuex.Store({
        state: {},
        actions: {
            getAllPosts: jest.fn(),
            swapPost: jest.fn(),
            timeTravel: jest.fn(),
        }
    });

    await store.dispatch('getAllPosts')
    expect.arrayContaining([
        expect.objectContaining({id:1})
    ])
})