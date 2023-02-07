const button = document.getElementById('add')
const search = document.getElementById('input-search')
const table = document.getElementById('favorites')

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
        <td> <button id=${user.id} class="remove"> Remover </button></td>
        </td>
       `
    table.appendChild(tr)
  })
}

loadData()

function getData(user) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
        .then(data => data)
      resolve(data)
    } catch (error) {
      reject(console.error(error))
    }
  })
}

function saveData(user) {
  removeAll()
  favorites.push(user)
  localStorage.clear()
  localStorage.setItem('@GitFavorites:', JSON.stringify(favorites))
  render()
}

function removeAll() {
  favorites.forEach(user => {
    const element = document.getElementById(user.id)
    if (element) {
      element.remove()
    }
  })
}

function deleteUser(userId) {
  removeAll()
  const updatedFavorites = favorites.filter(user => user.id !== userId)
  localStorage.clear()
  localStorage.setItem('@GitFavorites:', JSON.stringify(updatedFavorites))
  loadData()
}

async function create(value) {
  const info = await getData(value)
  const user = new GitFavorite(info)
  return user
}

export class GitFavorite {
  constructor(data) {
    this.id = this.generateRandomID()
    this.name = data.name
    this.username = data.login
    this.avatar = data.avatar_url
    this.repos = data.public_repos
    this.followers = data.followers
    this.url = data.url
  }

  generateRandomID() {
    return Math.random().toString(36)
  }
}

button.addEventListener('click', async () => {
  if (search.value) {
    const user = await create(search.value)
    if (user) {
      saveData(user)
    }
  }
})

table.addEventListener('click', event => {
  if (event.target.classList == 'remove') {
    confirm('Gostaria de remover este usuário?')
      ? deleteUser(event.target.id)
      : null
  }
})
