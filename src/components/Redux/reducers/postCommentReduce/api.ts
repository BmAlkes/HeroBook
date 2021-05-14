import { Post } from '../postsReducer/interfaces';

async function sendComments(post: Post) {
  const options: RequestInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  };

  const response = await fetch(
    `http://localhost:8080/posts/${post.id}`,
    options
  );
  const newPost = await response.json();
  return newPost;
}

const postCommentsApi = {
   sendComments,
};

export default postCommentsApi;
