export default (state = { posts : []}, action) => {
    switch (action.type) {      
      case 'FETCH_POSTS_SUCCESS': {
        return { 
          posts : action.posts 
        };
      }
      case 'VOTE_POST_SUCCESS' : {
        return {
          posts : state.posts.map(post => {
            if (post.id === action.post.id) { 
              action.post.comments = post.comments;
              action.post.showComments = post.showComments;              
              return action.post
            } else {
              return post
            }
          })
        }  
      }       
      case 'VOTE_COMMENT_SUCCESS' : {
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
            posts : posts
          }

      }  
      case 'FETCH_COMMENTS' : {
       // console.log(action)        
        return {
          posts : state.posts.map(post => {
            if (post.id === action.from) {       
              post.showComments = true;               
              post.comments = action.comments;                        
              return post
            } else {
              return post
            }
          })
        }          
      }
      default:
            return state;
    }
  };