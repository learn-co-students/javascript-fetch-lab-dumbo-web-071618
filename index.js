function getIssues() {
  const issuesDiv = document.querySelector('#issues')
  const repo = "https://api.github.com/repos/joalorro/javascript-fetch-lab/issues"

  fetch(repo, {
    method: "get",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => console.log(res))

}

function showIssues(json) {
}

function createIssue(){
  const postData = {
    title: document.querySelector('#title').value,
    body: document.querySelector('#body').value
  }

  const repo = "https://api.github.com/repos/joalorro/javascript-fetch-lab/issues"

  fetch(repo, {
    method: "post",
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then( res => res)
    .then(res => console.log(res))

  getIssues()
}

function showResults(json) {
  // const resultsDiv = document.querySelector('#results')
  // const jsonEl = document.createElement('p')
  // jsonEl.innerHTML = json.url
  // resultsDiv.appendChild(jsonEl)
  // console.log(json)
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  // const repo = 'https://github.com/learn-co-curriculum/javascript-fetch-lab/forks'
  //use fetch to fork it!
  fetch(repo, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => showForkedRepo(res))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

showForkedRepo = (json) => {
  const resultsDiv = document.querySelector('#results')
  const jsonEl = document.createElement('a')
  jsonEl.innerHTML = json.url
  jsonEl["href"] = json.url
  console.log(jsonEl)
  console.log(json)
  resultsDiv.appendChild(jsonEl)
}
