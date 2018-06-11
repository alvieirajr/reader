export default (state = { posts: [] }, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS': {
      return {
        posts: action.posts,
        status: action.status
      };
    }
    case 'VOTE_POST_SUCCESS': {
      console.log(action);
      console.log(state.post);
      return {
        posts: state.posts.map(post => {
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
      let posts = state.posts.map(post => {
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
      return {
        posts: state.posts.map(post => {
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
      return {
        status: action.status,
        posts: state.posts.map(post => {
          if (post.id == action.comment.parentId) {
            post.comments.push(action.comment)
            post.commentCount++;
          }
          return post;
        })

      }
    }
    case 'EDIT_COMMENT_SUCCESS': {
      console.log(action);
      return {
        status: action.status,
        posts: state.posts.map(post => {
          if (post.id == action.comment.parentId) {
            post.showComments = true
            post.comments = post.comments.map(comment => {
              console.log(comment)
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
      return {
        status: action.status,
        posts: state.posts.map(item => {
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
    default:
      return state;
  }
};