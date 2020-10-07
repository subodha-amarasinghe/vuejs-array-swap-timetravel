// import { expect } from 'chai'
import mutations from '@/store/mutations'

describe('Mutations', () => {


  test("get posts mutation", () => {
    const state = {
      postList: []
    }
    const items = { data: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 5 }] }
    mutations.LOADING_ALL_POSTS(state, { items })
    expect.arrayContaining([
      expect.objectContaining(state.postList)
    ])
  })

  it("Time Travel mutation", async() => {
    const state = {
      postList: [{ id: 2 }, { id: 3 }, { id: 1 }, { id: 5 }, { id: 4 }],
      commitHistoty: [
        { from: 4, to: 3, post: { id: 5 } },
        { from: 1, to: 2, post: { id: 1 } },
        { from: 0, to: 1, post: { id: 1 } }
      ]
    }
    const historyIndex = 1
    const expectedState = {
      postList:[{ id: 2 }, { id: 1 }, { id: 3 }, { id: 4 }, { id: 5 }],
      commitHistoty:[{ from: 0, to: 1, post: { id: 1 } }]
    }
    await mutations.TIME_TRAVEL(state, { historyIndex })

    expect(state).toEqual(expectedState);
  })
})
