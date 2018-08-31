const baseApi = 'https://api.github.com/'

function getIssues() {
  const repo = 'Gabriel-Batista/javascript-fetch-lab'
  fetch(`${baseApi}repos/${repo}/issues`, {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(res => showIssues(res))
}
getIssues()

function showIssues(json) {
  container = document.querySelector('#issues')
  container.innerHTML = "<ul>"
  for(const issue of json)  {
    container.innerHTML += `<li>${issue["title"]}</li>`
  }
}

function createIssue() {
  const repo = 'Gabriel-Batista/javascript-fetch-lab'
  title = document.querySelector('#title').value
  body = document.querySelector('#body').value
  const postData = { title: title, body: body }
  fetch(`${baseApi}repos/${repo}/issues`, {
    method: 'POST',
    headers: {
      "Authorization": `token ${getToken()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

//POST /repos/:owner/:repo/issues

function showResults(json) {
  container = document.querySelector('#results')
  container.innerHTML = `<a href=${json["clone_url"]}>${json["clone_url"]}</a>`
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(res => showResults(res))
}
forkRepo()

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '992d96fa6e1266650d74a354f5e6e395b82c721e'
}
