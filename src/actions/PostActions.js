import Axios from 'axios';

const api = "http://localhost:3001"

let token = localStorage.token

export const RETURN_404 = -1;
export const RETURN_OK = 1;

if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  'Authorization': token
} 

export const timeConverter = (UNIX_timestamp) =>{
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

export const fetchPostsSuccess = (posts) => {    
    return {
        type : 'FETCH_POSTS_SUCCESS',
        posts : posts,
        status : RETURN_OK
    }
}

export const fetchCommentsSuccess = (comments, from) => {
    return {
        type : 'FETCH_COMMENTS',
        comments : comments,
        from : from,
        status : RETURN_OK
    }
}

export const votePostSuccess = (post) => {

    return {
        type : 'VOTE_POST_SUCCESS',
        post : post,
        status : RETURN_OK 
    }
}

export const fetchPostSuccess = (post) => {
    return {
        type : 'FETCH_POST_SUCCESS',
        posts : new Array(post),
        status : RETURN_OK
    }
}

export const fetchPostUnsuccess = (post) => {
    return {
        type : 'FETCH_POST_UNSUCCESS',
        status : RETURN_404
    }
}

export const deletePostSuccess = (result) => {
    return {
        type : 'DELETE_POST_SUCCESS',
        status : RETURN_OK
    }
}

export const deletePostUnsuccess = (result) => {
    return {
        type : 'DELETE_POST_UNSUCCESS',
        status : RETURN_404
    }
}

export const deleteCommentSuccess = (result) => {
    return {
        type : 'DELETE_COMMENT_SUCCESS',
        status : RETURN_OK
    }
}

export const deleteCommentUnsuccess = (result) => {
    return {
        type : 'DELETE_COMMENT_UNSUCCESS',
        status : RETURN_404
    }
}

export const voteCommentSuccess = (comment) => {
    return {
        type : 'VOTE_COMMENT_SUCCESS',
        comment : comment,
        status : RETURN_OK
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        Axios.get(`${api}/posts`,  { headers })
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
        Axios.get(`${api}/posts/${id}/comments`, { headers })
            .then(response => {
                dispatch(fetchCommentsSuccess(response.data, id));
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const deleteComment = (id) => {    
    return (dispatch) => {
        Axios.delete(`${api}/comment/${id}`, { headers })
            .then(response => {              
                dispatch(deleteCommentSuccess(response.data));
            })
            .catch(error => {
                dispatch(deleteCommentUnsuccess())
            })
    }
}

export const votePost = (id, option) => {
    return (dispatch) => {
        Axios.post(`${api}/posts/${id}`, { option }, { headers })
            .then(response => {                
                dispatch(votePostSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const voteComment = (id, option) => {
    return (dispatch) => {
        Axios.post(`${api}/comments/${id}`, { option }, { headers })
            .then(response => {                
                dispatch(voteCommentSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const fetchPost = (id) => {    
    return (dispatch) => {
        Axios.get(`${api}/posts/${id}`, { headers })        
            .then(response => {       
                if (Object.keys(response.data).length == 0)  {
                    dispatch(fetchPostUnsuccess())    
                } else {
                    dispatch(fetchPostSuccess(response.data));
                }
            })
            .catch(error => {
                dispatch(fetchPostUnsuccess())
            })
    }
}

export const deletePost = (id) => {    
    return (dispatch) => {
        Axios.delete(`${api}/posts/${id}`, { headers })
            .then(response => {              
                dispatch(deletePostSuccess(response.data));
            })
            .catch(error => {
                dispatch(deletePostUnsuccess())
            })
    }
}

export const fetchPostsByCategory = (category) => {
    return (dispatch) => {
        Axios.get(`${api}/${category}/posts`, { headers })
            .then(response => {                
                dispatch(fetchPostsSuccess(response.data));                
            })
            .catch(error => {
                throw(error);
            })
    }
}