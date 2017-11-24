import Axiios from 'axios';

const api = "http://localhost:3001"
const URL_FETCH_POSTS  = `${api}/posts`;

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
        posts
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        return Axios.get(URL_FETCH_POSTS, { headers })
            .then(response => {
                dispatch(fetchPostsSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            })
    }
}