
const api = "http://localhost:3001"

let token = localStorage.token
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  'Authorization': token
}

export const getAllPosts = () => 
  fetch(`${api}/posts`, { headers })
  .then(res => res.json())
  

export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    

