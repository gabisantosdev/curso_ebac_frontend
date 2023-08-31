document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.querySelector('#name')
  const usernameElement = document.querySelector('#username')
  const reposElement = document.querySelector('#repos')
  const followersElement = document.querySelector('#followers')
  const followingElement = document.querySelector('#following')
  const linkElement = document.querySelector('#link')
  const avatarElement = document.querySelector('#avatar')

  fetch('https://api.github.com/users/gabisantosdev')
    .then((res) => res.json())
    .then((json) => {
      nameElement.innerHTML = json.name
      usernameElement.innerHTML = json.login
      reposElement.innerHTML = json.public_repos
      followersElement.innerHTML = json.followers
      followingElement.innerHTML = json.following
      linkElement.href = json.html_url
      avatarElement.src = json.avatar_url
    })
})