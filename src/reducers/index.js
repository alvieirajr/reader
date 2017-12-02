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
              return action.post
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