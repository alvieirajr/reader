import Axios from 'axios';
import { uuidv4 } from '..//util//Utils';

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

export const createCommentSuccess = (comment) => {
    return {
        type: 'CREATE_COMMENT_SUCCESS',
        comment: comment,
        status: RETURN_OK
    }
}

export const newPostSuccess = (post) => {
    return {
        type: 'CREATE_POST_SUCCESS',
        post: post,
        status: RETURN_OK
    }
}

export const editCommentSuccess = (comment) => {
    return {
        type: 'EDIT_COMMENT_SUCCESS',
        comment: comment,
        status: RETURN_OK
    }
}

export const editPostSuccess = (post) => {
    return {
        type: 'EDIT_POST_SUCCESS',
        post: post,
        status: RETURN_OK
    }
}

export const fetchError = (errorCode, errorMessage) => {
    return {
        type: 'FETCH_ERROR',
        status: RETURN_404,
        title: errorCode === null ? 'Something wrong!' : errorCode + ' Error!',
        menssage: errorMessage === null ? 'Error on fetch data.' : errorMessage,
        showBackButton: false
    }
}

export const fetchCategoriesSuccess = (categories) => {
    return {
        type: 'FETCH_CATEGORIES_SUCCESS',
        categories: categories,
        status: RETURN_OK
    }
}

export const sortBySuccess = (sortedPosts) => {
    return {
        type: 'SORTED',
        posts: sortedPosts,
        status: RETURN_OK
    }
}

export const setAuthorSuccess = (name) => {
    return {
        type: 'SET_AUTHOR_SUCCESS',
        status: RETURN_OK
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
                dispatch(deleteCommentSuccess(response.data));
            })
            .catch(error => {
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

export const createComment = (params) => {
    return (dispatch) => {

        params.id = uuidv4();
        params.timestamp = Date.now();

        Axios.post(`${api}/comments`, params, { headers })
            .then(response => {
                dispatch(createCommentSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchError())
            })
    }
}

export const editComment = (id, body) => {
    return (dispatch) => {
        let params = {
            timestamp: Date.now(),
            body: body
        }

        Axios.put(`${api}/comments/${id}`, params, { headers })
            .then(response => {
                dispatch(editCommentSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchError())
            })
    }
}

export const editPost = (post) => {
    return (dispatch) => {
        let params = {
            timestamp: Date.now(),
            body: post.body,
            title: post.title
        }

        Axios.put(`${api}/posts/${post.id}`, params, { headers })
            .then(response => {
                dispatch(editPostSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchError())
            })
    }
}

export const newPost = (post) => {
    return (dispatch) => {
        let params = {
            id: uuidv4(),
            timestamp: Date.now(),
            title: post.title,
            body: post.body,
            author: post.author,
            category: post.category
        }

        Axios.post(`${api}/posts`, params, { headers })
            .then(response => {
                dispatch(newPostSuccess(response.data));
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
                if (Object.keys(response.data).length === 0) {
                    dispatch(fetchPostUnsuccess())
                } else {
                    dispatch(fetchPostSuccess(response.data));
                }
            }).catch(error => {
                if (error.response === undefined) {
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

export const fetchCategories = () => {
    return (dispatch) => {
        Axios.get(`${api}/categories`, { headers })
            .then(response => {
                dispatch(fetchCategoriesSuccess(response.data.categories));
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
                if (response.data.categories.filter(item => item.name === category).length > 0) {

                    Axios.get(`${api}/${category}/posts`, { headers })
                        .then(response => {
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
                dispatch(fetchError())
            })

    }
}

export const sortBy = (sortMode, posts) => {
    return (dispatch) => {
        let sortedPosts = posts.slice();
        
        if (sortMode === 'by-date') {
            sortedPosts.sort(function (a, b) {
                if (a.timestamp > b.timestamp) {
                    return -1;
                }
                if (a.timestamp < b.timestamp) {
                    return 1;
                }
                if (a.timestamp === b.timestamp) {
                    return 0;
                }
            });
        }

        if (sortMode === 'by-score') {
            sortedPosts.sort(function (a, b) {
                if (a.voteScore > b.voteScore) {
                    return -1;
                }
                if (a.voteScore < b.voteScore) {
                    return 1;
                }
                if (a.voteScore === b.voteScore) {
                    return 0;
                }
            });
        }

        dispatch(sortBySuccess(sortedPosts));
    }

}

export const setAuthor = (name) =>  {
    localStorage.setItem("author", name);
    return (dispatch) => {
        dispatch(setAuthorSuccess(name));
    }
}