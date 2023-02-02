import {addPostActionCreator, deletePostActionCreator, profileReducer, ProfileType} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, post: 'Hello bro!!', likes: 22},
        {id: 2, post: 'I student It-incubator', likes: 38},
    ],
    newPostText: '',
    profile: {} as ProfileType,
    status: ''
}

test('new post should be added', () => {
    const action = addPostActionCreator('test post')

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

test('new post text should be \'test post\'', () => {
    const action = addPostActionCreator('test post')


    const newState = profileReducer(state, action)

    expect(newState.posts[0].post).toBe('test post')
})

test('length posts should be decrement', () => {
    const action = deletePostActionCreator(1)

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
})