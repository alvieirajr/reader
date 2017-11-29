export default (state = { posts : []}, action) => {
    switch (action.type) {      
      case 'FETCH_POSTS_SUCCESS': {
        return { 
          posts : action.posts 
        };
      }
      default:
            return state;
    }
  };