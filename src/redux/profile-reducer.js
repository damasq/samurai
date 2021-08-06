const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, post: 'Hi, how are you?', likesCount: 20 },
    { id: 2, post: 'It\'s my second post', likesCount: 13 },
    { id: 3, post: 'I\'m here again', likesCount: 2 },
    { id: 4, post: 'It\'s my fourth post', likesCount: 42 },
  ],
  newPostText: 'something'
}

const profileReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {

    case ADD_POST:
      let newPost = {
        id: 5,
        post: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
}

export const addPostActionCreater = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreater = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;