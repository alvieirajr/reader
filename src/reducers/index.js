export default (state = { posts: [] }, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS': {
      return {
        posts: action.posts,
        status: action.status
      };
    }
    case 'VOTE_POST_SUCCESS': {
      let newArray = state.posts.slice();
      return {
        posts: newArray.map(post => {
          if (post.id === action.post.id) {
            action.post.comments = post.comments;
            action.post.showComments = post.showComments;
            return action.post
          } else {
            return post
          }
        }),
        status: action.status
      }
    }
    case 'VOTE_COMMENT_SUCCESS': {
      let newArray = state.posts.slice();
      let posts = newArray.map(post => {
        if (typeof post.comments !== 'undefined') {
          post.comments = post.comments.map(comment => {
            if (comment.id === action.comment.id) {
              return action.comment;
            } else {
              return comment
            }
          })
          return post;
        } else {
          return post;
        }
      })

      posts.showComments = true;

      return {
        posts: posts,
        status: action.status
      }

    }
    case 'FETCH_COMMENTS': {
      let newArray = state.posts.slice();
      return {
        posts: newArray.map(post => {
          if (post.id === action.from) {
            post.showComments = true;
            post.comments = action.comments;
            return post
          } else {
            return post
          }
        }),
        status: action.status
      }
    }
    case 'FETCH_POST_SUCCESS': {
      return {
        posts: action.posts,
        status: action.status
      }
    }
    case 'FETCH_POST_UNSUCCESS': {
      return {
        status: action.status,
        title: action.title,
        menssage: action.menssage
      }
    }
    case 'CATEGORY_NOT_EXIST': {
      return {
        status: action.status,
        title: action.title,
        menssage: action.menssage
      }
    }
    case 'FETCH_ERROR': {
      return {
        status: action.status,
        title: action.title,
        menssage: action.menssage,
        showBackButton: false
      }
    }
    case 'CREATE_COMMENT_SUCCESS': {
      let newArray = state.posts.slice();
      return {
        status: action.status,
        posts: newArray.map(post => {
          if (post.id == action.comment.parentId) {
            post.comments.push(action.comment)
            post.commentCount++;
          }
          return post;
        })

      }
    }
    case 'EDIT_COMMENT_SUCCESS': {
      let newArray = state.posts.slice();
      return {
        status: action.status,
        posts: newArray.map(post => {
          if (post.id == action.comment.parentId) {
            post.comments = post.comments.map(comment => {
              if (comment.id === action.comment.id) {
                return action.comment;
              } else {
                return comment;
              }
            })
          }
          return post;
        })
      }
    }
    case 'DELETE_COMMENT_SUCCESS': {
      let newArray = state.posts.slice();
      return {
        status: action.status,
        posts: newArray.map(item => {
          if (item.comments == undefined) return item;
          if (item.commentCount > 0) {
            item.comments = item.comments.filter(comment => {
              if (comment.id !== action.deleted_comment.id) {
                return comment
              }
            })
            item.commentCount--;
          }
          return item;
        })
      }
    }
    case 'EDIT_POST_SUCCESS': {
      let newArray = state.posts.slice();
      return {
        status: action.status,
        posts : newArray.map(item => {
          if (item.id == action.post.id) {            
            action.post.showComments = item.showComments 
            action.post.comments = item.comments;           
            return action.post
          } else {
            return item
          }
        })
      }
    }
    case 'CREATE_POST_SUCCESS': {      
      let newArray = state.posts.slice();
      newArray.splice(0, 0, action.post)
      return {
        status: action.status,
        posts: newArray
      }
    }
    case 'FETCH_CATEGORIES_SUCCESS': {
      let newArray = state.posts.slice();
      return {
        status: action.status,
        posts: newArray,
        categories : action.categories
      }
    }
    case 'SORTED': {      
      return {
        status: action.status,
        posts: action.posts
      }
    }
    default:
      return state;
  }
};