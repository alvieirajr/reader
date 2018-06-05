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

export const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        posts: posts,
        status: RETURN_OK
    }
}

export const fetchCommentsSuccess = (comments, from) => {
    return {
        type: 'FETCH_COMMENTS',
        comments: comments,
        from: from,
        status: RETURN_OK
    }
}

export const votePostSuccess = (post) => {

    return {
        type: 'VOTE_POST_SUCCESS',
        post: post,
        status: RETURN_OK
    }
}

export const fetchPostSuccess = (post) => {
    return {
        type: 'FETCH_POST_SUCCESS',
        posts: new Array(post),
        status: RETURN_OK
    }
}

export const fetchPostUnsuccess = (post) => {
    return {
        type: 'FETCH_POST_UNSUCCESS',
        status: RETURN_404,
        title: '404 Error!',
        menssage: 'Ops... The post you were looking not be found.'
    }
}

export const deletePostSuccess = (result) => {
    return {
        type: 'DELETE_POST_SUCCESS',
        status: RETURN_OK
    }
}

export const deleteCommentSuccess = (comment) => {
    return {
        type: 'DELETE_COMMENT_SUCCESS',
        status: RETURN_OK,
        deleted_comment: comment
    }
}

export const fetchCategoryNotExist = (category) => {
    return {
        type: 'CATEGORY_NOT_EXIST',
        status: RETURN_404,
        title: 'Ops...',
        menssage: `The category '${category}' not exists.`
    }
}

export const voteCommentSuccess = (comment) => {
    return {
        type: 'VOTE_COMMENT_SUCCESS',
        comment: comment,
        status: RETURN_OK
    }
}

export const fetchError = (errorCode, errorMessage) => {
    return {
        type: 'FETCH_ERROR',
        status: RETURN_404,
        title: errorCode == null ? 'Something wrong!' : errorCode + ' Error!',
        menssage: errorMessage == null ? 'Error on fetch data.' : errorMessage,
        showBackButton: false
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        Axios.get(`${api}/posts`, { headers })
            .then(response => {
                dispatch(fetchPostsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchError())
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
                dispatch(fetchError())
            })
    }
}

export const deleteComment = (id) => {
    return (dispatch) => {
        Axios.delete(`${api}/comments/${id}`, { headers })
            .then(response => {
                console.log(response)
                dispatch(deleteCommentSuccess(response.data));
            })
            .catch(error => {
                console.log(error)
                dispatch(fetchError());
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
                dispatch(fetchError())
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
                dispatch(fetchError())
            })
    }
}

export const fetchPost = (id) => {
    return (dispatch) => {

        Axios.get(`${api}/posts/${id}`, { headers })
            .then(response => {
                if (Object.keys(response.data).length == 0) {
                    dispatch(fetchPostUnsuccess())
                } else {
                    dispatch(fetchPostSuccess(response.data));
                }
            }).catch(error => {
                if (error.response === undefined) {
                    console.log('s')
                   // let errorCode = (error.response == undefined ? null : error.response.status);
                 //   let errorMenssage = (error.response == undefined ? null : error.response.statusText);
                 //   dispatch(fetchError(errorCode, errorMenssage));
                 dispatch(fetchError());
                } else {
                    dispatch(fetchPostUnsuccess());
                }
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
                dispatch(fetchError())
            })
    }
}

export const fetchPostsByCategory = (category) => {
    return (dispatch) => {
        Axios.get(`${api}/categories`, { headers })
            .then(response => {
                if (response.data.categories.filter(item => item.name == category).length > 0) {

                    Axios.get(`${api}/${category}/posts`, { headers })
                        .then(response => {
                            console.log(response)
                            dispatch(fetchPostsSuccess(response.data));
                        })
                        .catch(error => {
                            dispatch(fetchError())
                        })

                } else {
                    dispatch(fetchCategoryNotExist(category));
                }
            })
            .catch(error => {
                console.log(error)
                dispatch(fetchError())
            })




    }
}