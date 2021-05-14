async function getUserGithub(username:string){
  const response = await fetch(
      `https://api.github.com/users/${username}`
  );
  const user = await response.json();
  return user
}

const loginApi ={
  getUserGithub
}

export default loginApi;