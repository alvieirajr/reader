import Axios from 'axios';

const api = "http://localhost:3001"
const URL_BASE  = `${api}`;

const URL_FETCH_POSTS  = `${api}/posts`;
const URL_VOTE_POST = `${api}/posts/:id`;
const URL_FETCH_COMMENTS = '';

let token = localStorage.token

if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  'Authorization': token
} 

export const fetchPostsSuccess = (posts) => {
    return {
        type : 'FETCH_POSTS_SUCCESS',
        posts : posts
    }
}

export const fetchCommentsSuccess = (comments, from) => {
    //console.log(comments)
    //console.log(from);
    return {
        type : 'FETCH_COMMENTS',
        comments : comments,
        from : from
    }
}

export const votePostSuccess = (post) => {
    return {
        type : 'VOTE_POST_SUCCESS',
        post : post
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        Axios.get(URL_FETCH_POSTS,  { headers })
            .then(response => {                
                dispatch(fetchPostsSuccess(response.data));                
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const fetchComments = (id) => {
    return (dispatch) => {
        Axios.get(`${api}` + '/posts/' + id + '/comments', { headers })
            .then(response => {
                dispatch(fetchCommentsSuccess(response.data, id));
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const votePost = (id, option) => {
    return (dispatch) => {
        Axios.post(`${api}` + '/posts/' + id, { option }, { headers })
            .then(response => {                
                dispatch(votePostSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            })
    }
}