let favorites = new Array()

function loadData() {
  favorites = JSON.parse(localStorage.getItem('@GitFavorites:')) || []
  render()
}

function render() {
  const table = document.getElementById('favorites')
  favorites.forEach(user => {
    const tr = document.createElement('tr')
    tr.id = user.id
    tr.innerHTML += `
        <td class="user">
          <a href=${user.url} target="_blank">
            <img
            src=${user.avatar}
            alt="user's avatar"/>
          </a>
          <div>
            <p>${user.name}</p> 
            <span>/${user.username}</span> 
          </div>
        </td>
        <td>${user.repos}</td>
        <td>${user.followers}</td>  
        <td class="remove">Remover</td>
        </td>
   
       `
    table.appendChild(tr)
  })
}

loadData()

function getData(user) {
  try {
    const data = fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.error(err))
    return data
  } catch (error) {
    console.log(error)
  }
}

function saveData(user) {
  favorites.push(user)
  localStorage.clear()
  localStorage.setItem('@GitFavorites:', JSON.stringify(favorites))
  removeAll()
  render()
}

function removeAll() {
  const allUsers = document.body.querySelectorAll('.user')
  allUsers.forEach(element => {
    element.remove()
  })
}

async function create(data) {
  const data = await getData()
  const user = new GitFavorite(data)
}

export class GitFavorite {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.username = data.login
    this.avatar = data.avatar_url
    this.repos = data.public_repos
    this.followers = data.followers
    this.url = data.url
  }
}
