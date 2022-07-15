import { FETCH_ALL, CREATE, DELETE, UPDATE, } from '../constants/actionTypes';

// import { createSlice } from '@reduxjs/toolkit';

// const postsReducer = createSlice({
//     name: 'posts',
//     initialState: [],
//     reducers: {
//         posts(posts, action) {
//             posts.push({
//                 creator: action.payload
//             })
//         }
//     }
// })

// export const { posts } = postsReducer.actions
// export  default postsReducer.reducer

const reducer = (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];

        default:
            return posts;
    }
}

export default reducer;