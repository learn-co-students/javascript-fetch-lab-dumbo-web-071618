let issues = document.getElementById('issues')
let lab = 'bryanteng/javascript-fetch-lab'

function getIssues() {
  fetch(`https://api.github.com/repos/${lab}/issues`, {
  method: `get`,
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => console.log(res));
}

function showIssues(json) {

}

function createIssue() {

  fetch(`https://api.github.com/repos/${lab}/issues`, {
  method: `post`,
  title: document.getElementById('title'),
  body: document.getElementById('body'),
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => console.log(res))
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  method: `post`,
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => console.log(res));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
